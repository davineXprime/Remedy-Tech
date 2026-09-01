// Amazon affiliate link
const affiliateLink = "https://amzn.to/4xzHX7w";

document.addEventListener("DOMContentLoaded", () => {
  const buyButton = document.getElementById("buyButton");

  if (buyButton) {
    buyButton.addEventListener("click", () => {
      window.open(affiliateLink, "_blank", "noopener,noreferrer");
    });
  }
});
