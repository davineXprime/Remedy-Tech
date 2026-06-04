# Remedy Tech Zone - Restructured

A modern affiliate wellness technology platform with dynamic product loading from JSON.

## 📁 Project Structure

```
remedy-tech-zone/
├── index.html                 # Single-page app entry point
├── server.js                  # Express.js server
├── package.json               # Dependencies
├── Dockerfile                 # Docker containerization
│
├── css/
│   └── main.css              # All styles (merged from original files)
│
├── js/
│   ├── main.js               # Router & page navigation
│   └── products.js           # Product loading & rendering from JSON
│
├── data/
│   └── products.json         # Complete product catalog + categories
│
└── README.md                 # This file
```

## 🚀 Quick Start

### Local Development
```bash
npm install
npm start
# Visit http://localhost:3000
```

### Docker
```bash
docker build -t remedy-tech .
docker run -p 3000:3000 remedy-tech
# Visit http://localhost:3000
```

## 📚 Learning Resources

### Understanding the Architecture

**1. Main App Flow (js/main.js)**
- Handles page routing between: Home, Shop, About, Contact
- Uses data attributes (`data-page`) for navigation
- Simple state management with `AppRouter` class

**2. Product System (js/products.js)**
- Loads `data/products.json` on page load
- `ProductManager` class handles:
  - Fetching product data
  - Filtering by category
  - Rendering product cards
  - Managing category buttons

**3. Styling (css/main.css)**
- CSS Variables for theming (gold/stone colors)
- Flexbox & CSS Grid for layouts
- Glass-morphism effects with backdrop-filter
- Mobile-responsive design with media queries

## 🔧 How to Extend

### Add a New Product
Edit `data/products.json` and add to the `products` array:
```json
{
  "id": 21,
  "title": "New Product",
  "category": "wellness",
  "price": 99,
  "condition": "New",
  "description": "Product description",
  "link": "https://affiliate-link.com"
}
```

### Add a New Category
Edit `data/products.json` and add to the `categories` array:
```json
{
  "id": "newcat",
  "name": "New Category",
  "icon": "🎯",
  "color": "from-blue-500 to-blue-700"
}
```

### Customize Styling
Edit `css/main.css` and modify CSS variables at the top:
```css
:root {
  --gold-500: #D4AF37;  /* Change primary gold */
  --stone-200: #e7e5e4; /* Change text color */
}
```

## 🌐 Google Sheets + Zapier Integration

### Setup Instructions
1. Create a Google Sheet with columns: Title, Category, Price, Description, Link
2. Use Zapier to watch for new rows
3. Create a Zapier action to POST to your products API endpoint
4. Zapier will automatically update your products.json

(Detailed Zapier setup guide coming)

## 🐳 Containerization Explained

**Dockerfile Breakdown:**
- `FROM node:18-alpine` → Start with lightweight Node.js image
- `WORKDIR /app` → Set container working directory
- `COPY` → Move files into container
- `RUN npm install` → Install dependencies
- `EXPOSE 3000` → Declare port
- `CMD` → Run server on startup

**Build & Run:**
```bash
docker build -t remedy-tech .
docker run -p 3000:3000 remedy-tech
```

## 📖 CSS Learning Path

### Start Here:
1. Open `css/main.css`
2. Look at `:root` section → CSS Variables
3. See `body` → Main background styling
4. Check `.product-card` → Grid layout example
5. Study media queries at bottom → Responsive design

**Key Concepts:**
- CSS Variables (--gold-500)
- Flexbox (nav, filters)
- CSS Grid (products)
- Backdrop-filter (glass effect)
- Gradients (buttons, hero)
- Media queries (mobile responsiveness)

## 📖 JavaScript Learning Path

### Start Here:
1. Open `js/main.js`
2. Understand `AppRouter` class
3. See `navigate()` method → Page switching logic
4. Check event listeners → How clicks work

### Then:
1. Open `js/products.js`
2. Study `ProductManager` class
3. See `async loadProducts()` → Fetching JSON
4. Check `renderProducts()` → DOM manipulation
5. Review `renderFilters()` → Creating buttons dynamically

**Key Concepts:**
- Classes (OOP)
- Async/Await (loading data)
- fetch() API (HTTP requests)
- DOM manipulation (querySelector, innerHTML)
- Event listeners (click, DOMContentLoaded)
- Array methods (map, filter)

## 🔗 Affiliate Setup

Products currently link to Amazon searches. To add affiliate tracking:
1. Get your Amazon Associates ID
2. Modify product links to include your ID
3. Example: `https://amazon.com/s?k=keyword&tag=YOUR-ID`

## 📝 Next Steps

- [ ] Set up Google Sheets + Zapier for product management
- [ ] Connect to a backend API (optional for scaling)
- [ ] Add affiliate link auto-formatting
- [ ] Deploy to GitHub Pages or Vercel
- [ ] Set up analytics tracking
- [ ] Add product search functionality

## 📧 Support

For questions on CSS/JS/Docker, refer to the learning sections above.

---

**Built with ❤️ for biohacking enthusiasts**
