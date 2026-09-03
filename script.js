const articles = [
  {
    id: 1,
    categoryKey: "glasses",
    badge: "Meta Glasses",
    title: "Why Meta Smart Glasses Are the Ultimate Hands-Free Upgrade",
    teaser:
      "Equipped with a 12MP camera, open-ear audio, and real-time voice-activated Meta AI for seamless capture and interaction.",
    fullContent:
      "Smart glasses have officially crossed the line from novelty concept to daily essential. With integrated 12MP ultra-wide cameras, open-ear spatial audio, and continuous voice access to Meta AI, these wearables allow you to record high-definition POV footage without pulling out a smartphone. Beyond camera capabilities, voice processing lets you instantly solve queries, translate foreign text on sight, and take phone calls completely hands-free while navigating busy environments.",
    author: "Remedy editorial",
    date: "Jun 18, 2026",
    readTime: "6 min read",
    accent: "cyan",
    stat: "12MP / POV",
  },
  {
    id: 2,
    categoryKey: "rings",
    badge: "Smart Rings",
    title: "Why I Ditched My Smartwatch for 24/7 AI Ring Recovery Tracking",
    teaser:
      "After weeks of dealing with smartwatch screen distractions and constant charging routines, switching to a lightweight smart ring completely transformed my daily health monitoring.",
    fullContent:
      "For years, I relied on a high-end smartwatch to track my daily movement and sleep patterns. While the data was helpful, the execution wasn't: the wrist bulk was uncomfortable at night, the screen constantly lit up my dark bedroom, and needing to charge it every single day created endless friction.\n\nMaking the switch to a sleek, screenless smart ring changed everything. Because it reads biometrics directly from the arterial blood flow in your finger, the accuracy for heart rate variability (HRV), resting heart rate, and body temperature fluctuations is remarkably precise.\n\nThe true game-changer is the daily Readiness and Sleep scoring system. Instead of drowning me in raw charts, the companion algorithms analyze my biometric baselines to tell me exactly how well my body recovered overnight. On days when my readiness score is low, I adjust my intensity to prevent burnout. On high-score days, I know I'm primed to perform. Combined with a multi-day battery life and water resistance that lets me wear it in the shower or pool, it delivers true zero-friction health tracking that blends seamlessly into daily life.",
    author: "Remedy editorial",
    date: "Sep 03, 2026",
    readTime: "4 min read",
    accent: "lime",
    stat: "24 / 7 sensing",
  },
  {
    id: 3,
    categoryKey: "watches",
    badge: "Smart Watches",
    title: "Maximize Your Daily Performance with AI-Powered Smartwatches",
    teaser:
      "Track complex workout metrics, overall cardiovascular health, and real-time energy readiness scores backed by onboard AI.",
    fullContent:
      "The current generation of smartwatches has evolved into dynamic personal health coaches. Utilizing sophisticated machine learning models, modern watches aggregate your baseline recovery rates, heart rate fluctuations, and activity loads to suggest personalized training intensities every morning. Featuring crisp AMOLED displays, high-durability sapphire glass, and independent GPS connectivity, they remain a staple for active performance tracking.",
    author: "Jon Bell",
    date: "Jun 04, 2026",
    readTime: "7 min read",
    accent: "amber",
    stat: "AI / readiness",
  },
];

const articlesContainer = document.querySelector("#articles-container");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const modal = document.querySelector("#article-modal");
const modalBadge = document.querySelector("#modal-badge");
const modalTitle = document.querySelector("#modal-title");
const modalMeta = document.querySelector("#modal-meta");
const modalBody = document.querySelector("#modal-body");
const closeModalButton = document.querySelector("[data-close-modal]");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

const accentColors = {
  cyan: "#79e5df",
  lime: "#c4e87d",
  amber: "#f0c56e",
};

function arrowIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  `;
}

function clockIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3 2" />
    </svg>
  `;
}

function signalArt(article) {
  const barHeights = [28, 44, 34, 66, 52, 88, 71, 108, 82, 126, 92, 116, 76, 98, 60];
  const color = accentColors[article.accent];
  const bars = barHeights
    .map(
      (height, index) =>
        `<span class="signal-bar" style="--bar-height:${height}px;--bar-opacity:${0.22 + index / 28};--accent:${color}"></span>`,
    )
    .join("");

  return `
    <div class="signal-art" aria-hidden="true">
      <span class="signal-code">RTZ—0${article.id}</span>
      <div class="signal-bars">${bars}</div>
      <span class="signal-caption">signal / baseline</span>
    </div>
  `;
}

function articleCard(article, index) {
  return `
    <article class="article-card" style="animation-delay:${index * 70}ms">
      ${signalArt(article)}
      <div class="article-content">
        <div class="article-topline">
          <span class="category-badge" data-accent="${article.accent}">${article.badge}</span>
          <span class="article-number">0${article.id} / 03</span>
        </div>
        <h2>${article.title}</h2>
        <p class="article-teaser">${article.teaser}</p>
        <div class="article-footer">
          <span class="read-time">${clockIcon()}${article.readTime}</span>
          <button class="read-note" type="button" data-article-id="${article.id}" aria-label="Read ${article.title}">
            Read note ${arrowIcon()}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderArticles(category = "all") {
  const visibleArticles =
    category === "all" ? articles : articles.filter((article) => article.categoryKey === category);

  if (!visibleArticles.length) {
    articlesContainer.innerHTML = `
      <div class="empty-state">
        <h2>No notes on this signal yet</h2>
        <p>Try another category. We are still listening for the next useful thing.</p>
        <button type="button" data-reset-filter>View all notes</button>
      </div>
    `;
    return;
  }

  articlesContainer.innerHTML = visibleArticles.map(articleCard).join("");
}

function setActiveFilter(category) {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === category;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  renderArticles(category);
}

function openArticle(articleId) {
  const article = articles.find((item) => item.id === Number(articleId));
  if (!article) return;

  modalBadge.dataset.accent = article.accent;
  modalBadge.textContent = article.badge;
  modalTitle.textContent = article.title;
  modalBody.textContent = article.fullContent;
  modalMeta.innerHTML = `
    <span>${article.author}</span>
    <span>${article.date}</span>
    <span>${article.readTime}</span>
    <span class="modal-stat">${article.stat}</span>
  `;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  closeModalButton.focus();
}

function closeArticle() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

function setMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.hidden = !open;
}

document.addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-filter]");
  const articleButton = event.target.closest("[data-article-id]");
  const resetButton = event.target.closest("[data-reset-filter]");

  if (filterButton) {
    setActiveFilter(filterButton.dataset.filter);
    return;
  }

  if (articleButton) {
    openArticle(articleButton.dataset.articleId);
    return;
  }

  if (resetButton) {
    setActiveFilter("all");
    return;
  }

  if (event.target === modal) {
    closeArticle();
  }
});

closeModalButton.addEventListener("click", closeArticle);

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!modal.hidden) closeArticle();
    if (!mobileMenu.hidden) setMenu(false);
  }
});

renderArticles();
