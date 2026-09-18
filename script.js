document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("loadArticleBtn");

  btn.addEventListener("click", () => {

    fetch("./article.html")   // GitHub Pages requires this
      .then(res => res.text())
      .then(html => {
        document.getElementById("article-container").innerHTML = html;
      })
      .catch(err => {
        document.getElementById("article-container").innerHTML =
          "<p style='color:red;'>Could not load article. Check folder structure.</p>";
        console.error(err);
      });

  });

});
