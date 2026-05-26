# 🚀 QUICK START GUIDE - Gold Pouch Website

## ⚡ 30-Second Setup

### 1. Open the Website
```
Double-click: C:\Users\toddg\source\repos\davineXprime\Goldpouch\index.html
```

### 2. Customize Your Content
Edit this file with your data:
```
C:\Users\toddg\source\repos\davineXprime\Goldpouch\JS\data.js
```

### 3. Deploy to GitHub
```powershell
cd C:\Users\toddg\source\repos\davineXprime\Goldpouch
git add .
git commit -m "Gold Pouch website complete"
git push origin main
```

---

## ✨ What You Have

| Feature | Status | Location |
|---------|--------|----------|
| One-page website | ✅ | index.html |
| Gold/White/Red theme | ✅ | CSS/main.css |
| E-commerce section | ✅ | index.html |
| Blog section | ✅ | index.html |
| 3D animations | ✅ | JS/animations.js |
| Popup overlays | ✅ | JS/main.js |
| Neon background | ✅ | JS/background.js |
| Products (6) | ✅ | JS/data.js |
| Blog articles (6) | ✅ | JS/data.js |
| Responsive design | ✅ | CSS/responsive.css |
| GitHub ready | ✅ | .gitignore |

---

## 🎨 Customization Quick Links

### Change Logo
**File:** `index.html` (line ~30)
```html
<!-- Change from: -->
<span class="gold-text">GOLD</span>
<span class="heart-icon">❤️</span>
<span class="red-text">POUCH</span>

<!-- To your brand -->
<span class="gold-text">YOUR</span>
<span class="heart-icon">💰</span>
<span class="red-text">BRAND</span>
```

### Change Colors
**File:** `CSS/main.css` (lines 1-15)
```css
:root {
	--primary-gold: #FFD700;      /* Edit here */
	--primary-red: #DC143C;       /* Edit here */
}
```

### Add Products
**File:** `JS/data.js` (after line 10)
```javascript
{
	id: 7,
	name: 'Your Product',
	price: '$XX.99',
	description: 'Description',
	icon: '🎯',
	affiliate: 'https://your-link.com',
	fullDescription: 'Full details...',
	features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
}
```

### Add Blog Post
**File:** `JS/data.js` (after line 80)
```javascript
{
	id: 7,
	title: 'Your Blog Title',
	excerpt: 'Preview text...',
	icon: '📝',
	author: 'Your Name',
	date: 'January 15, 2024',
	readTime: '5 min read',
	category: 'Your Category',
	fullContent: '<h3>Title</h3><p>Content...</p>'
}
```

### Change Tagline
**File:** `index.html` (line ~31)
```html
<p class="tagline">Your new tagline here</p>
```

---

## 🌐 Deploy to GitHub Pages (3 Steps)

### Step 1: Commit Changes
```powershell
cd C:\Users\toddg\source\repos\davineXprime\Goldpouch
git add .
git commit -m "Gold Pouch website updates"
git push origin main
```

### Step 2: Enable Pages
1. Go to: https://github.com/davineXprime/Goldpouch
2. Click: Settings → Pages
3. Select: Branch = "main", Folder = "/"
4. Click: Save

### Step 3: Visit Your Site
```
https://davineXprime.github.io/Goldpouch/
```

**Wait 1-2 minutes** for GitHub to deploy.

---

## 📁 File Structure Quick Reference

```
📦 Goldpouch
 ┣ 📄 index.html           ← MAIN PAGE
 ┣ 📂 CSS
 ┃ ┣ 📄 main.css          ← Primary styles
 ┃ ┣ 📄 animations.css    ← Animations
 ┃ ┣ 📄 responsive.css    ← Mobile design
 ┃ ┗ 📄 styles.css        ← Extra styles
 ┣ 📂 JS
 ┃ ┣ 📄 main.js           ← Core functionality
 ┃ ┣ 📄 data.js           ← EDIT THIS FOR CONTENT
 ┃ ┣ 📄 animations.js     ← Animation effects
 ┃ ┣ 📄 background.js     ← Background effects
 ┃ ┗ 📄 config.js         ← Configuration
 ┗ 📄 README.md           ← Documentation
```

---

## 🎯 Common Tasks

### Preview Website Locally
```powershell
# Option 1: Open in browser
Start-Process "C:\Users\toddg\source\repos\davineXprime\Goldpouch\index.html"

# Option 2: Use Python server
cd C:\Users\toddg\source\repos\davineXprime\Goldpouch
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Edit Product Price
**File:** `JS/data.js`
```javascript
{
	id: 1,
	price: '$99.99',  ← Change this
}
```

### Change Background Color
**File:** `CSS/main.css`
```css
body {
	background: linear-gradient(135deg, #000000, #1a1a1a);
	/* Edit the hex colors */
}
```

### Add Affiliate Link
**File:** `JS/data.js`
```javascript
{
	affiliate: 'https://your-affiliate-link.com',  ← Change this
}
```

### Disable 3D Effects (if slow)
**File:** `CSS/animations.css`
```css
/* Comment out: */
/* @keyframes rotate3d { ... } */

/* Remove: */
/* animation: rotate3d 20s linear infinite; */
```

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Page won't load | Check file paths in HTML |
| Styles not showing | Clear cache (Ctrl+Shift+Del) |
| Animations don't work | Check JS console (F12) for errors |
| GitHub not updating | Wait 2 minutes and refresh |
| Mobile looks broken | Check CSS/responsive.css |

---

## 📊 Content Included

### Products (Ready to Use)
1. Premium Wellness Kit - $49.99
2. Gold Pouch Gold Bar - $99.99
3. Heart Health Bundle - $34.99
4. Daily Vitality Blend - $29.99
5. Premium Collagen Series - $59.99
6. Sleep Optimizer Pro - $44.99

### Blog Posts (Ready to Use)
1. The Golden Guide to Affiliate Marketing
2. Heart Health in 2024
3. Monetizing Your Wellness Blog
4. Supplements vs. Whole Foods
5. Building Trust as an Affiliate
6. Sleep Science Explained

---

## 🎨 Color Palette

```
Gold:        #FFD700  ← Main brand color
Red:         #DC143C  ← Accent color
White:       #FFFFFF  ← Text
Dark:        #1a1a1a  ← Background
```

---

## 🚀 Next 5 Minutes

- [ ] Open `index.html` in browser
- [ ] Review the website
- [ ] Edit your first product in `JS/data.js`
- [ ] Save and refresh (F5)
- [ ] Push to GitHub

---

## 📚 Full Documentation

For complete setup, customization, and deployment guide, see:
```
SETUP_GUIDE.md
```

---

## 💡 Pro Tips

1. **Add Multiple Products** - Just copy/paste an object in data.js
2. **Change Colors Globally** - Edit CSS variables in main.css
3. **Test on Mobile** - Use browser DevTools (F12 → Toggle Device)
4. **Track Changes** - Use `git status` before pushing
5. **Backup First** - `git commit` before major changes

---

## ⏱️ Time to Deploy: ~5 minutes

✅ **Your website is ready!**

Start customizing now. Good luck! 🎉

---

*For detailed guidance, open: SETUP_GUIDE.md*
