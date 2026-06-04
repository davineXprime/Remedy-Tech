// Main app navigation and page routing
class AppRouter {
  constructor() {
    this.currentPage = 'home';
    this.pages = {
      'home': 'home-page',
      'shop': 'shop-page',
      'about': 'about-page',
      'contact': 'contact-page'
    };
  }

  // Navigate to page
  navigate(pageName) {
    // Hide all pages
    Object.values(this.pages).forEach(pageId => {
      const page = document.getElementById(pageId);
      if (page) page.style.display = 'none';
    });

    // Show selected page
    const page = document.getElementById(this.pages[pageName]);
    if (page) {
      page.style.display = 'block';
      this.currentPage = pageName;
      window.scrollTo(0, 0);
    }
  }

  // Setup nav links
  setupNavigation() {
    document.querySelectorAll('[data-page]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.dataset.page;
        this.navigate(pageName);
      });
    });
  }
}

// Initialize router on page load
const router = new AppRouter();
document.addEventListener('DOMContentLoaded', () => {
  router.setupNavigation();
  router.navigate('home');
});
