# 🏥 Remedy Tech Zone

**Clear-eyed field notes on wearable AI and health hardware.**

A modern, accessible web platform showcasing in-depth articles and field notes on wearable technology, smart devices, and health intelligence. Designed for the curious and health-conscious who want useful signals—not hype cycles.

**Live Site:** [remedytech.zone](http://remedytech.zone)

---

## 📋 Overview

Remedy Tech Zone is a curated publication dedicated to exploring the intersection of wearable technology and health. The site features:

- **📰 Field Notes**: In-depth articles covering Meta Smart Glasses, Smart Rings, and Smartwatches
- **🎯 Smart Filtering**: Browse articles by category or view all content
- **✨ Modern Design**: Sleek, dark-themed interface with ambient visual effects
- **♿ Accessible**: Built with semantic HTML, keyboard navigation, and screen reader support
- **📱 Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Fast**: Pure HTML, CSS, and vanilla JavaScript—no heavy frameworks

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | Custom CSS with CSS Variables, Responsive Design |
| **Typography** | DM Sans (body), Space Mono (headings/metadata) |
| **Hosting** | GitHub Pages (remedytech.zone via CNAME) |
| **Language Distribution** | CSS (52.1%), JavaScript (26.6%), HTML (21.3%) |

---

## 📁 Project Structure

```
remedy-tech/
├── index.html          # Main HTML structure and semantic markup
├── styles.css          # Complete styling with responsive breakpoints
├── script.js           # Article rendering, filtering, and modal logic
├── CNAME               # Domain configuration for remedytech.zone
├── robots.txt          # SEO and crawler instructions
├── sitemap.xml         # XML sitemap for search engines
├── README.md           # This file
└── ROADMAP.md          # Future development plans
```

---

## 🚀 Key Features

### 1. **Dynamic Article System**
- Articles stored in JavaScript data structure
- Instant rendering and filtering without page reload
- Support for categorization (Meta Glasses, Smart Rings, Smartwatches)

### 2. **Filtering & Discovery**
- Real-time filter buttons with article counts
- "Reset filter" option to view all content
- Empty state handling with helpful messaging

### 3. **Article Modal**
- Full-screen modal for reading articles
- Metadata display (author, date, read time)
- Key takeaway highlights
- Keyboard navigation (Escape to close)

### 4. **Accessibility**
- Semantic HTML structure
- ARIA labels and roles
- Focus management
- Keyboard-only navigation support
- Color contrast compliant

### 5. **Visual Design**
- Ambient grid background
- Subtle glow effects
- Animated card reveals
- Color-coded article badges (cyan, lime, amber)
- Signal visualization bars

---

## 🎨 Color Palette

```css
/* Primary Colors */
--ink: #edf6eb              /* Light text */
--page: #081412             /* Background */
--panel: #10211e            /* Card backgrounds */

/* Accent Colors */
--lime: #c4e87d             /* Meta Glasses */
--cyan: #79e5df             /* Smart Rings */
--amber: #f0c56e            /* Smartwatches */

/* Neutral Tones */
--muted: #98b6a9
--quiet: #789b8d
--dim: #64877a
--line: #1e3a35
```

---

## 📖 Usage Guide

### Viewing Articles
1. Open [remedytech.zone](http://remedytech.zone) in your browser
2. Browse all field notes or filter by category
3. Click "Read note" on any card to open the full article
4. Press Escape or click the close button to exit

### Keyboard Navigation
- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons and filters
- **Escape**: Close modals or mobile menu
- **Click**: Select filters or read articles

---

## 🔧 Development

### Prerequisites
- No build tools required
- Works in any modern browser
- Simple file-based structure

### Running Locally
```bash
# Clone the repository
git clone https://github.com/davineXprime/Remedy-Tech.git
cd Remedy-Tech

# Serve the files (using any local server)
python -m http.server 8000
# or
npx http-server

# Open in browser
open http://localhost:8000
```

### File Descriptions

#### `index.html`
- Semantic HTML5 structure
- Header with brand and status indicator
- Filter section for categorization
- Article grid container
- Modal backdrop for full-article view
- Footer with branding

#### `styles.css`
- **Design System**: CSS Variables for colors, fonts, spacing
- **Responsive**: Mobile-first approach with media queries
- **Animations**: Smooth transitions and entrance animations
- **Accessibility**: Focus states, high contrast options

#### `script.js`
- Article data management
- Dynamic card rendering
- Filter functionality
- Modal open/close logic
- Menu toggle for mobile
- Event delegation pattern

---

## 📝 Adding New Articles

To add a new article, update the `articles` array in `script.js`:

```javascript
{
  id: 4,
  categoryKey: "new-category",
  badge: "Badge Text",
  title: "Article Title",
  teaser: "Short preview text...",
  fullContent: "Full article content...",
  author: "Author Name",
  date: "Jun 25, 2026",
  readTime: "8 min read",
  accent: "lime",           // cyan, lime, or amber
  stat: "Key Statistic"
}
```

Then update the filter button in `index.html`:
```html
<button class="filter-button" type="button" role="tab" data-filter="new-category">
  Filter Label <span>01</span>
</button>
```

---

## 🔐 SEO & Meta

- Meta description optimized for search engines
- Semantic HTML structure
- XML sitemap for crawler indexing
- robots.txt for crawler guidance
- Open Graph ready (can be enhanced)

---

## ♿ Accessibility Features

- ✅ Semantic HTML elements
- ✅ ARIA labels and descriptions
- ✅ Keyboard-navigable
- ✅ Focus indicators
- ✅ Color contrast WCAG compliant
- ✅ Screen reader friendly
- ✅ Reduced motion support

---

## 📱 Responsive Breakpoints

| Breakpoint | Devices |
|-----------|---------|
| < 560px | Mobile phones |
| 560px - 800px | Tablets |
| > 800px | Desktop/Large screens |

---

## 🐛 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

This project is open source. Check the repository for specific license details.

---

## 🤝 Contributing

Contributions are welcome! Areas for contribution:

- Adding new articles
- Improving accessibility
- Performance optimization
- Bug fixes
- Design enhancements

Please check the [ROADMAP.md](./ROADMAP.md) for planned features and development priorities.

---

## 📞 Support

For issues, suggestions, or feedback, please open an issue on the GitHub repository.

---

## 🎯 About

**Remedy Tech Zone** is committed to providing clear-eyed, practical analysis of wearable technology and health hardware. We cut through the hype to deliver useful signals for the curious and health-conscious.

**Tagline:** *Thoughtful hardware for a more capable day.*

---

**Last Updated:** September 3, 2026  
**Topics:** Healthcare, Technology  
**Repository:** [davineXprime/Remedy-Tech](https://github.com/davineXprime/Remedy-Tech)
