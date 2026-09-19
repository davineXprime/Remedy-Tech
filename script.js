// Function to dynamically load external HTML article file
async function loadArticle(filePath) {
  const container = document.getElementById('article-container');
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load article (${response.status})`);
    }
    const htmlContent = await response.text();
    container.innerHTML = htmlContent;
  } catch (error) {
    console.error('Error fetching article:', error);
    container.innerHTML = '<p>Error loading today\'s article. Please check back later.</p>';
  }
}

// Automatically load the latest article when page loads
document.addEventListener('DOMContentLoaded', () => {
  loadArticle('articles/latest-article.html');
});
