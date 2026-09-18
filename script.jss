// Load article.html when button is clicked
document.getElementById("loadArticleBtn").addEventListener("click", () => {
  fetch("article.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("article-container").innerHTML = data;
      console.log("Article loaded successfully ✨");
    })
    .catch(error => console.error("Error loading article:", error));
});

// Button hover glow
const buttons = document.querySelectorAll('.button');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 15px rgba(255, 138, 138, 0.6)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  });
});
