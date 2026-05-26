# Gold Pouch - Deployment & Setup Guide

## Quick Start (5 minutes)

### 1. **Local Testing**
```bash
# Navigate to project directory
cd goldpouch3

# Start a local server (Python 3)
python -m http.server 8000

# Or using Node.js (http-server)
npx http-server

# Open browser to http://localhost:8000
```

### 2. **GitHub Setup**
```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial Gold Pouch website - Premium affiliate marketing platform"

# Add GitHub remote (replace with your repo)
git remote add origin https://github.com/yourusername/goldpouch.git

# Push to GitHub
git push -u origin main
```

### 3. **Enable GitHub Pages**
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Select **main** branch under Source
4. Save
5. Wait 1-2 minutes for deployment
6. Your site will be available at: `https://yourusername.github.io/goldpouch/`

---

## Detailed Setup Instructions

### Prerequisites
- GitHub account (free)
- Git installed on your computer
- Text editor (VS Code recommended)
- Modern web browser

### Step 1: Prepare Local Environment

```bash
# Clone or download the project
cd /path/to/goldpouch3

# Verify folder structure
# ✓ index.html
# ✓ css/ (styles.css, animations.css)
# ✓ js/ (main.js, config.js, utils.js)
# ✓ assets/videos/ (heartbeat video - optional)
# ✓ README.md
```

### Step 2: Customize Content

**Edit `index.html`:**
- Change company name (search for "Gold Pouch")
- Update logo text
- Modify hero section title and subtitle
- Add your contact information

**Edit `js/main.js`:**
- Update product information in `products` array
- Modify blog posts in `blogPosts` array
- Customize prices, descriptions, and features

**Edit `css/styles.css`:**
- Change color scheme in `:root` variables
- Adjust fonts and sizing if needed
- Modify button styles

### Step 3: Add Background Video (Optional)

1. Download free heartbeat video:
   - https://pixabay.com (search "heartbeat")
   - https://pexels.com (search "heartbeat")
   - https://coverr.co

2. Place video file: `assets/videos/heartbeat.mp4`

3. Supported formats:
   - MP4 (recommended)
   - WebM
   - OGG

4. Video requirements:
   - Duration: 10-30 seconds (loops)
   - Resolution: 1920x1080 or higher
   - File size: Under 10MB for best performance

**If no video:** The site works perfectly with just the gradient background!

### Step 4: Test Locally

```bash
# Option A: Using Python
python -m http.server 8000
# Visit: http://localhost:8000

# Option B: Using Node.js
npx http-server
# Visit: http://localhost:8080

# Option C: Using VS Code Live Server
# Install "Live Server" extension
# Right-click index.html → "Open with Live Server"
```

**Test checklist:**
- [ ] Homepage loads correctly
- [ ] Navigation links work
- [ ] Product overlays open and close
- [ ] Blog post overlays work
- [ ] Contact form submits
- [ ] Responsive on mobile
- [ ] All animations smooth
- [ ] No console errors

### Step 5: Initialize Git Repository

```bash
# Initialize git in project directory
git init

# Configure git (first time only)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Gold Pouch website with premium design

- Complete HTML structure with semantic tags
- Premium CSS with chrome color scheme
- Full JavaScript functionality
- 6 products with overlay modals
- 6 blog posts with full content
- Responsive design
- Smooth animations"

# Verify status
git status
```

### Step 6: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `goldpouch` (or your choice)
3. Add description: "Premium affiliate marketing and blogging platform"
4. Select "Public" (required for GitHub Pages)
5. Skip creating README (we have one)
6. Click "Create repository"

### Step 7: Connect to GitHub

```bash
# Add GitHub as remote
git remote add origin https://github.com/yourusername/goldpouch.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main

# Verify push
git remote -v
```

### Step 8: Enable GitHub Pages

**Method 1: Via GitHub Web Interface**
1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll to **Pages** section (left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes
7. Your site is live at: `https://yourusername.github.io/goldpouch/`

**Method 2: Via Command Line (Optional)**
```bash
# Add GitHub Pages config (optional)
git push origin main
```

### Step 9: Verify Live Site

1. Open: `https://yourusername.github.io/goldpouch/`
2. Check that all elements load
3. Test all interactive features
4. Check mobile responsiveness
5. Verify animations work

---

## Ongoing Maintenance

### Making Updates

```bash
# Make changes to files locally

# Check what changed
git status

# Stage changes
git add .

# Commit changes
git commit -m "Update: Changed product prices and blog content"

# Push to GitHub
git push origin main

# Site updates automatically (usually within 1-2 minutes)
```

### Common Updates

**Update Products:**
```javascript
// In js/main.js - edit products array
const products = [
	{
		id: 1,
		title: "Your Product Name",
		price: "$XX.XX",
		// ... etc
	}
];
```

**Update Blog Posts:**
```javascript
// In js/main.js - edit blogPosts array
const blogPosts = [
	{
		id: 1,
		title: "Article Title",
		content: `<h2>Full article here</h2>...`
	}
];
```

**Update Styling:**
```css
/* In css/styles.css - modify variables */
:root {
	--gold-primary: #ffdf00;  /* Change colors */
	--red-primary: #dc143c;   /* Change colors */
}
```

---

## Troubleshooting

### Site not showing up
- [ ] Did you push to `main` branch?
- [ ] Check GitHub Pages settings are enabled
- [ ] Wait 1-2 minutes for deployment
- [ ] Check for errors in build logs

### Changes not updating
- [ ] Hard refresh browser (Ctrl+Shift+R)
- [ ] Clear browser cache
- [ ] Verify push was successful: `git log`
- [ ] Check GitHub Pages deployment status

### Video not playing
- [ ] Place video at: `assets/videos/heartbeat.mp4`
- [ ] Check video format (MP4 recommended)
- [ ] Check file size (should be under 10MB)
- [ ] Site works fine without video - it's optional!

### Styling looks broken
- [ ] Check CSS file loaded (F12 → Network tab)
- [ ] Verify CSS file path is correct
- [ ] Clear browser cache and reload
- [ ] Check for CSS syntax errors

---

## Performance Optimization

### Before Deployment

```bash
# Minify CSS (optional - using online tools)
# https://minifier.org/

# Optimize images (if adding any)
# https://tinypng.com/

# Validate HTML
# https://validator.w3.org/
```

### After Deployment

1. Test performance:
   - https://pagespeed.web.dev/
   - https://gtmetrix.com/

2. Monitor site with:
   - Google Analytics (optional)
   - GitHub Pages metrics

---

## Advanced: Custom Domain

### Setup Custom Domain

1. **Register domain** at:
   - GoDaddy
   - Namecheap
   - Domain.com

2. **Configure DNS:**
   - Point to GitHub Pages nameservers
   - Or add CNAME record

3. **Update GitHub Pages:**
   - Go to repo Settings → Pages
   - Add custom domain
   - GitHub creates CNAME file automatically

4. **Enable HTTPS:**
   - GitHub automatically provides SSL certificate
   - Check Settings → Pages for status

---

## Version Control Best Practices

```bash
# View commit history
git log

# See what changed
git diff

# Revert to previous version (if needed)
git checkout main

# Create branch for experiments
git checkout -b experimental-design

# Switch back to main
git checkout main

# Merge branch (after testing)
git merge experimental-design
```

---

## Backup & Recovery

```bash
# Clone repository locally for backup
git clone https://github.com/yourusername/goldpouch.git goldpouch-backup

# Create a new branch with current state
git branch backup-2024

# Push backup branch
git push origin backup-2024
```

---

## File Checklist

Before deploying, verify you have:

- [ ] index.html
- [ ] css/styles.css
- [ ] css/animations.css
- [ ] js/main.js
- [ ] js/config.js
- [ ] js/utils.js
- [ ] assets/videos/ folder (with or without video)
- [ ] README.md
- [ ] .gitignore (optional)

---

## Support Resources

- **GitHub Docs**: https://docs.github.com/
- **GitHub Pages**: https://pages.github.com/
- **HTML Validator**: https://validator.w3.org/
- **CSS Validator**: https://jigsaw.w3.org/css-validator/
- **Performance**: https://pagespeed.web.dev/

---

## Next Steps After Deployment

1. ✅ Test all links and functions
2. ✅ Set up Google Analytics (optional)
3. ✅ Configure email for contact form (optional)
4. ✅ Add custom domain (optional)
5. ✅ Monitor performance
6. ✅ Update content regularly

---

**Congratulations!** Your Gold Pouch website is now live! 🎉

For questions or issues, check the README.md and review the code comments.
