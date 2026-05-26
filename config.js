/**
 * GOLD POUCH - CONFIGURATION FILE
 * Easily customize your website without editing HTML/CSS/JS
 */

const goldPouchConfig = {
    // Site Information
    site: {
        title: "Gold Pouch - Premium Affiliate & Blog Platform",
        description: "Premium one-page website for affiliate marketing and blogging",
        logo: "Gold Pouch",
        favicon: "assets/images/favicon.ico"
    },

    // Navigation
    navigation: {
        links: [
            { label: "Shop", href: "#ecommerce" },
            { label: "Blog", href: "#blog" },
            { label: "Contact", href: "#contact" }
        ]
    },

    // Hero Section
    hero: {
        title: "Welcome to Gold Pouch",
        subtitle: "Premium Affiliate Marketing & Premium Blogging Platform",
        ctaText: "Get Started"
    },

    // E-Commerce Section
    ecommerce: {
        title: "Premium Products",
        subtitle: "Discover our exclusive collection",
        seeMoreText: "See More Products"
    },

    // Blog Section
    blog: {
        title: "Latest Blog Posts",
        subtitle: "Insights and tips for success",
        seeMoreText: "See More Articles"
    },

    // Contact Section
    contact: {
        title: "Get In Touch",
        subtitle: "We'd love to hear from you"
    },

    // Colors (can override CSS variables)
    colors: {
        goldPrimary: "#ffdf00",
        goldSecondary: "#d4af37",
        goldDark: "#b8860b",
        goldHighlight: "#fff4cc",
        redPrimary: "#dc143c",
        redSecondary: "#ff6b6b",
        redDark: "#8b0000",
        whitePrimary: "#ffffff",
        darkBg: "#1a1a1a"
    },

    // Social Media Links
    social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#"
    },

    // Footer
    footer: {
        copyrightYear: 2024,
        companyName: "Gold Pouch",
        description: "Premium affiliate marketing and blogging platform"
    },

    // Analytics (optional)
    analytics: {
        enabled: false,
        googleAnalyticsId: "UA-XXXXXXX-X",
        trackEvents: true
    },

    // Features
    features: {
        enableBackgroundVideo: true,
        enableAnimations: true,
        enableScrollAnimations: true,
        enableContactForm: true
    },

    // Performance
    performance: {
        lazyLoadImages: true,
        preloadFonts: true,
        minifyCSS: true
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = goldPouchConfig;
}
