// Load and render products from JSON
class ProductManager {
  constructor() {
    this.products = [];
    this.categories = [];
    this.currentFilter = 'all';
  }

  // Load products.json
  async loadProducts() {
    try {
      const response = await fetch('/data/products.json');
      const data = await response.json();
      this.categories = data.categories;
      this.products = data.products;
      console.log(`Loaded ${this.products.length} products`);
      return true;
    } catch (error) {
      console.error('Error loading products:', error);
      return false;
    }
  }

  // Get products by category
  getByCategory(categoryId) {
    if (categoryId === 'all') return this.products;
    return this.products.filter(p => p.category === categoryId);
  }

  // Get category name and icon
  getCategoryInfo(categoryId) {
    return this.categories.find(c => c.id === categoryId);
  }

  // Render product cards
  renderProducts(container, categoryId = 'all') {
    this.currentFilter = categoryId;
    const filtered = this.getByCategory(categoryId);
    
    container.innerHTML = filtered.map(product => {
      const category = this.getCategoryInfo(product.category);
      return `
        <div class="product-card">
          <div class="product-header">
            <span class="category-badge">${category.icon} ${category.name}</span>
            <span class="price">$${product.price}</span>
          </div>
          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.description}</p>
          <a href="${product.link}" target="_blank" class="btn-primary">
            Explore Product →
          </a>
        </div>
      `;
    }).join('');

    // Show empty state if no products
    if (filtered.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>No products in this category</p></div>';
    }
  }

  // Render category filters
  renderFilters(container) {
    const html = `
      <button class="filter-btn active" data-category="all">All Products</button>
      ${this.categories.map(cat => `
        <button class="filter-btn" data-category="${cat.id}">
          ${cat.icon} ${cat.name}
        </button>
      `).join('')}
    `;
    container.innerHTML = html;

    // Add click listeners
    container.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const categoryId = e.target.dataset.category;
        this.renderProducts(document.getElementById('products-grid'), categoryId);
      });
    });
  }

  // Get product count by category
  getCount(categoryId) {
    return this.getByCategory(categoryId).length;
  }
}

// Initialize on page load
const productManager = new ProductManager();
document.addEventListener('DOMContentLoaded', async () => {
  const loaded = await productManager.loadProducts();
  if (loaded) {
    productManager.renderFilters(document.getElementById('category-filters'));
    productManager.renderProducts(document.getElementById('products-grid'), 'all');
  }
});
