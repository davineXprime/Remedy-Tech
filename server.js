const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongo:27017/remedy-tech-zone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// ==================== DATABASE MODELS ====================

// Customer Schema
const customerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  createdAt: { type: Date, default: Date.now },
});

// Order Item Schema
const orderItemSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  price: Number,
  quantity: Number,
});

// Order Schema
const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  customerEmail: String,
  items: [orderItemSchema],
  total: Number,
  status: { type: String, enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  stripePaymentId: String,
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Customer = mongoose.model('Customer', customerSchema);
const Order = mongoose.model('Order', orderSchema);

// ==================== API ROUTES ====================

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Create payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { items, email, shippingAddress } = req.body;

    // Calculate total
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create or find customer
    let customer = await Customer.findOne({ email });
    if (!customer) {
      customer = new Customer({
        email,
        name: shippingAddress.name,
        phone: shippingAddress.phone,
        address: shippingAddress,
      });
      await customer.save();
    }

    // Create order
    const order = new Order({
      customerId: customer._id,
      customerEmail: email,
      items,
      total: Math.round(total * 100) / 100,
      shippingAddress,
    });
    await order.save();

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100), // Amount in cents
      currency: 'usd',
      metadata: {
        orderId: order._id.toString(),
        customerEmail: email,
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      orderId: order._id,
      amount: total,
    });
  } catch (error) {
    console.error('Payment intent error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Confirm payment
app.post('/api/confirm-payment', async (req, res) => {
  try {
    const { paymentIntentId, orderId } = req.body;

    // Update order status
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status: 'paid', stripePaymentId: paymentIntentId, updatedAt: new Date() },
      { new: true }
    );

    res.json({ success: true, order });
  } catch (error) {
    console.error('Confirm payment error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get order
app.get('/api/orders/:orderId', async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get customer orders
app.get('/api/orders/customer/:email', async (req, res) => {
  try {
    const orders = await Order.find({ customerEmail: req.params.email });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Webhook for Stripe events
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || 'whsec_test_placeholder'
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return res.sendStatus(400);
  }

  // Handle payment success
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const orderId = paymentIntent.metadata.orderId;

    await Order.findByIdAndUpdate(
      orderId,
      { status: 'paid', stripePaymentId: paymentIntent.id, updatedAt: new Date() }
    );

    console.log(`Payment succeeded for order: ${orderId}`);
  }

  res.sendStatus(200);
});

// ==================== START SERVER ====================

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Remedy Tech Zone API running on port ${PORT}`);
});
