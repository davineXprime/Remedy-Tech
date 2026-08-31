// rtz.js - small site JS extracted from rtz.html
// Initializes Lucide icons and any small client behaviors

document.addEventListener('DOMContentLoaded', function () {
    try {
        if (typeof lucide !== 'undefined' && lucide) {
            // Replace all data-lucide icons with SVGs
            lucide.createIcons();
        }
    } catch (e) {
        // fail silently - icons will remain as data attributes if script fails
        console.warn('Lucide init failed', e);
    }

    // Any future JS (analytics, CTA tracking) can go here
});
