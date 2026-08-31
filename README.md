# Remedy Tech Zone | Affiliate Landing Page

Welcome to the official repository for the **Remedy Tech Zone** single-page affiliate website. This high-converting, mobile-responsive landing page is optimized to showcase home backup energy solutions—specifically highlighting the **Generac 12,500 Starting Watt Tri-Fuel Portable Generator** with direct routing to Amazon affiliate offers.

---

## 🌟 Key Features

- **Above-the-Fold Spotlight:** Immediate presentation of the featured product, price drop ($1,399.00 / Save $300), stock availability, and rating summary.
- **High-Converting CTA Design:** Prominent Amazon-styled buy buttons linked directly to affiliate URLs (`https://amzn.to/4wWA7U7`).
- **Feature Priority Showcase:** Highlight box dedicated to key product selling points (Tri-Fuel flexibility across Natural Gas, Propane, and Gasoline).
- **Technical Specifications Table:** Clean performance comparison breakdown (wattage output, displacement, safety features).
- **Verified Customer Reviews:** Grid highlighting top 3 homeowner testimonials extracted from verified buyers.
- **SEO Educational Guide:** Dedicated article section explaining tri-fuel emergency power backup benefits for organic search visibility.
- **Brand-Centric Footer:** Streamlined footer dedicated exclusively to Remedy Tech Zone branding, quick navigation, and legal disclaimers.
- **Zero-Flicker Architecture:** Robust vector asset rendering to ensure instant loading across all viewports and iframe environments.

---

## 🎨 Brand Identity & Colors

| Element | Hex Code / Style | Tailwind Utility |
| :--- | :--- | :--- |
| **Brand Primary Green** | `#059669` | `bg-emerald-600` / `text-emerald-600` |
| **Brand Dark Green** | `#047857` | `bg-emerald-700` |
| **Brand Secondary Orange** | `#f97316` | `bg-orange-500` / `text-orange-600` |
| **Brand Dark Orange** | `#ea580c` | `bg-orange-600` |
| **Amazon Gold Button** | `#FFC200` to `#FF9900` | Custom Gradient (`.amazon-btn`) |
| **Background Neutral** | `#F8FAFC` | `bg-slate-50` |

---

## 🛠️ Tech Stack & Dependencies

- **HTML5 & CSS3:** Semantic markup and modern styling.
- **Tailwind CSS (v3 CDN):** Utility-first styling for fast, responsive design.
- **Lucide Icons (vLatest):** Lightweight SVG vector icon library.
- **Vanilla JavaScript:** Simple, zero-dependency icon initialization and UI interactions.

---

## 📁 File Structure

```text
remedy-tech-zone/
├── index.html       # Single-file HTML application containing layout, styles, and scripts
└── README.md        # Project documentation and deployment guide
```

---

## 🚀 How to Run Locally

Since this landing page is built as a self-contained single-file HTML application using Tailwind CDN and Lucide Icons, running it locally requires no build steps or `npm install`:

1. Clone or download the repository to your computer.
2. Double-click `index.html` or open it in any modern browser (Chrome, Firefox, Safari, Edge).
3. (Optional) Serve via a lightweight web server:
   ```bash
   npx serve .
   # or with Python
   python -m http.server 8000
   ```

---

## ⚙️ Customization Guide

### Updating the Affiliate Link
To replace the Amazon affiliate tracking link with your own tag, search for `https://amzn.to/4wWA7U7` in `index.html` and update all `href` attributes:

```html
<a href="YOUR_CUSTOM_AFFILIATE_LINK" target="_blank" rel="noopener noreferrer" class="amazon-btn ...">
    <span>BUY ON AMAZON</span>
</a>
```

### Updating Product Pricing or Discounts
Find the price display container inside `index.html` to modify the current price, list price, or savings percentage:

```html
<div class="flex items-baseline space-x-3">
    <span class="text-4xl font-black text-white">$1,399.00</span>
    <span class="text-lg text-slate-400 line-through font-medium">$1,699.00</span>
    <span class="text-xs font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/40">
        Save $300.00 (18% Off)
    </span>
</div>
```

---

## 🌐 Deployment Options

This landing page is static and ready for instant deployment to any hosting provider:

- **Netlify / Vercel:** Drag and drop the directory containing `index.html` directly into the web dashboard.
- **GitHub Pages:** Push `index.html` to a GitHub repository and enable Pages in repository settings.
- **AWS S3 / Cloudflare Pages:** Upload `index.html` directly to your bucket or static site project.

---

## 📄 License & Terms

© 2026 Remedy Tech Zone. Created for independent product review and affiliate marketing purposes.