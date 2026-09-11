const articles = [
  {
    id: 1,
    categoryKey: "glasses",
    badge: "Meta Glasses",
    title: "Why Meta Smart Glasses Are the Ultimate Hands-Free Upgrade",
    teaser:
      "Equipped with a 12MP camera, open-ear audio, and real-time voice-activated Meta AI for seamless capture and interaction.",
    fullContent:
      "Smart glasses have officially crossed the line from novelty concept to daily essential. With integrated 12MP ultra-wide cameras, open-ear spatial audio, and continuous voice access to Meta AI, these glasses transform how we capture moments and interact with information.\n\nThe 12MP ultra-wide camera captures stunning POV footage. Open-ear audio lets you stay connected without isolation. Real-time Meta AI integration answers questions on demand. The lightweight design ensures all-day comfort.",
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
      "For years, I relied on a high-end smartwatch to track my daily movement and sleep patterns. While the data was helpful, the execution wasn't: the wrist bulk was uncomfortable at night, the screen was a constant distraction, and I was charging it every single day.\n\nThen I switched to a smart ring. The difference was immediately obvious: 7-day battery life means charging once a week. No screen means no notifications pulling me away. And the AI-powered recovery insights are eerily accurate. If you value data without the distraction, a smart ring might be your answer.",
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
      "The current generation of smartwatches has evolved into dynamic personal health coaches. Utilizing sophisticated machine learning models, modern watches aggregate your baseline recovery rate, current stress levels, and real-time biometric data to deliver a daily readiness score.\n\nThis isn't just step counting anymore. These devices track VO2 max, sleep quality phases, training load, and even predict when you're at risk of overtraining. If you're serious about performance optimization, a modern smartwatch is a no-brainer.",
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
const modalAuthor = document.querySelector("#modal-author");
const modalDate = document.querySelector("#modal-date");
const modalReadtime = document.querySelector("#modal-readtime");
const modalStat = document.querySelector("#modal-stat");
const modalBody = document.querySelector("#modal-body");
const closeModalButton = document.querySelector("[data-close-modal]");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

const accentColors = {
  cyan: "#79e5df",
  lime: "#c4e87d",
  amber: "#f0c56e",
};

function clockIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5l3 2" />
  </svg>`;
}

function arrowIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>`;
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
  modalAuthor.textContent = article.author;
  modalDate.textContent = article.date;
  modalReadtime.textContent = article.readTime;
  modalStat.textContent = article.stat;
  modalBody.textContent = article.fullContent;
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
