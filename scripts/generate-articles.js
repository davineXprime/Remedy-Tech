const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const articleDir = path.join(rootDir, 'article');
const data = require(path.join(rootDir, 'data', 'articles.json'));

const colors = {
  jade: '#5bb39a',
  sage: '#8ec7a4',
  emerald: '#1d7a5f',
  slate: '#0b1f1a',
  slateAlt: '#112d26',
  ink: '#071611',
  text: '#eafaf4',
  muted: '#cfe8dd',
  border: 'rgba(163, 219, 191, 0.18)'
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function buildArticleStyles() {
  return `
    :root {
      --jade: ${colors.jade};
      --sage: ${colors.sage};
      --emerald: ${colors.emerald};
      --slate: ${colors.slate};
      --slate-alt: ${colors.slateAlt};
      --ink: ${colors.ink};
      --text: ${colors.text};
      --muted: ${colors.muted};
      --border: ${colors.border};
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      background: linear-gradient(180deg, var(--ink) 0%, var(--slate) 100%);
      color: var(--text);
      font-family: Inter, Arial, sans-serif;
      line-height: 1.7;
    }

    .container {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 1.25rem;
    }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 25;
      background: rgba(7, 22, 17, 0.86);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 72px;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      text-decoration: none;
      color: var(--text);
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    .brand-mark {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 0.7rem;
      background: linear-gradient(135deg, var(--jade), var(--emerald));
      color: var(--ink);
      font-weight: 800;
    }

    .accent { color: var(--jade); }

    .back-link {
      text-decoration: none;
      color: var(--muted);
      transition: color 0.2s ease;
    }

    .article-shell {
      padding-top: 2.5rem;
      padding-bottom: 4rem;
    }

    .article-card {
      background: linear-gradient(145deg, rgba(14, 32, 28, 0.9), rgba(7, 22, 17, 0.82));
      border: 1px solid var(--border);
      border-radius: 1.5rem;
      padding: 1.5rem;
      box-shadow: 0 18px 38px rgba(0, 0, 0, 0.25);
    }

    .hero img {
      display: block;
      width: 100%;
      border-radius: 1rem;
      margin-bottom: 1.5rem;
      border: 1px solid var(--border);
      background: var(--slate-alt);
    }

    .eyebrow {
      display: inline-block;
      padding: 0.45rem 0.8rem;
      border-radius: 999px;
      background: rgba(91, 179, 154, 0.12);
      border: 1px solid rgba(91, 179, 154, 0.28);
      color: var(--jade);
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-weight: 700;
    }

    h1 {
      margin: 1rem 0 0.85rem;
      color: var(--text);
      font-size: clamp(2.2rem, 4vw, 4rem);
      line-height: 1.08;
    }

    .dek {
      max-width: 72ch;
      margin-bottom: 1.5rem;
      color: var(--muted);
      font-size: 1.08rem;
    }

    .meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      color: #a9cbbd;
      font-size: 0.85rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--border);
      margin-bottom: 1.5rem;
    }

    .content {
      max-width: 75ch;
    }

    .content p {
      margin: 0 0 1.2rem;
      color: #e1f3ea;
      font-size: 1.04rem;
      line-height: 1.9;
    }

    .takeaways {
      margin-top: 2.5rem;
      background: rgba(17, 45, 38, 0.7);
      border: 1px solid var(--border);
      border-radius: 1rem;
      padding: 1.5rem;
    }

    .takeaways h3 {
      margin: 0 0 1rem;
      color: var(--text);
      font-size: 1.2rem;
    }

    .takeaways ul {
      margin: 0;
      padding-left: 1.25rem;
      color: #dbeee6;
      line-height: 1.9;
    }

    @media (max-width: 640px) {
      .nav {
        flex-direction: column;
        justify-content: center;
        gap: 0.75rem;
        padding: 1rem 0;
      }

      .article-card {
        padding: 1rem;
      }
    }
  `;
}

function buildArticleScript() {
  return `
    document.addEventListener('DOMContentLoaded', () => {
      const back = document.querySelector('.back-link');
      if (!back) return;

      back.addEventListener('mouseenter', () => {
        back.style.color = '#9be2c1';
      });

      back.addEventListener('mouseleave', () => {
        back.style.color = '#cfe8dd';
      });
    });
  `;
}

function buildCoverSvg(title, category, accentName) {
  const accentMap = {
    Smartphones: '#5bb39a',
    Wearables: '#8ec7a4',
    Audio: '#1d7a5f'
  };

  const accent = accentMap[category] || '#5bb39a';
  const label = title
    .replace(/Review.*$/, '')
    .trim();

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">${category} review cover art in jade and sage green palette.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#071611"/>
      <stop offset="100%" stop-color="#112d26"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <rect x="90" y="90" width="1020" height="620" rx="28" fill="#0f2a24" stroke="rgba(155,226,193,0.25)"/>
  <circle cx="938" cy="200" r="108" fill="${accent}" opacity="0.14"/>
  <rect x="165" y="185" width="230" height="410" rx="30" fill="#0b1f1a" stroke="rgba(155,226,193,0.22)"/>
  <rect x="185" y="210" width="190" height="360" rx="22" fill="#13372f"/>
  <rect x="225" y="250" width="110" height="8" rx="4" fill="${accent}"/>
  <rect x="225" y="272" width="94" height="8" rx="4" fill="#d4f5e5" opacity="0.8"/>
  <rect x="225" y="310" width="110" height="180" rx="16" fill="#1d7a5f" opacity="0.28"/>
  <text x="470" y="260" fill="#edfdf6" font-family="Arial, sans-serif" font-size="54" font-weight="700">${title.length > 28 ? title.slice(0, 27) + '…' : title}</text>
  <text x="470" y="330" fill="#d7f5e6" font-family="Arial, sans-serif" font-size="28">${category}</text>
  <text x="470" y="385" fill="#bfdcc8" font-family="Arial, sans-serif" font-size="24">${label || 'Budget tech'} • Smart value</text>
  <rect x="470" y="440" width="220" height="50" rx="22" fill="${accent}"/>
  <text x="520" y="473" fill="#071611" font-family="Arial, sans-serif" font-size="22" font-weight="700">Under $150</text>
</svg>
  `;
}

function buildArticleHtml(article) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${article.title} | Remedy Tech Zone</title>
    <meta name="description" content="${article.dek}" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header class="topbar">
      <div class="container nav">
        <a href="../../index.html" class="brand">
          <span class="brand-mark">R</span>
          <span>RemedyTech<span class="accent">.Zone</span></span>
        </a>
        <a class="back-link" href="../../index.html">← Back to RTZ</a>
      </div>
    </header>

    <main class="container article-shell">
      <article class="article-card">
        <div class="hero">
          <img src="./images/cover.svg" alt="${article.title}" />
        </div>

        <div class="eyebrow">${article.category}</div>
        <h1>${article.title}</h1>
        <p class="dek">${article.dek}</p>

        <div class="meta-row">
          <span>${article.published}</span>
          <span>${article.readMinutes}</span>
        </div>

        <div class="content">
          ${article.body.map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </div>

        <div class="takeaways">
          <h3>Key Takeaways</h3>
          <ul>
            ${article.takeaways.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </article>
    </main>

    <script src="js/script.js"></script>
  </body>
</html>`;
}

for (const article of data) {
  const articlePath = path.join(articleDir, article.slug);
  ensureDir(path.join(articlePath, 'css'));
  ensureDir(path.join(articlePath, 'js'));
  ensureDir(path.join(articlePath, 'images'));

  fs.writeFileSync(path.join(articlePath, 'index.html'), buildArticleHtml(article), 'utf8');
  fs.writeFileSync(path.join(articlePath, 'css', 'style.css'), buildArticleStyles(), 'utf8');
  fs.writeFileSync(path.join(articlePath, 'js', 'script.js'), buildArticleScript(), 'utf8');
  fs.writeFileSync(path.join(articlePath, 'images', 'cover.svg'), buildCoverSvg(article.title, article.category, article.slug), 'utf8');
}

console.log(`Generated ${data.length} article pages using the jade/sage/emerald palette.`);
