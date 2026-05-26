/**
 * Gold Pouch Core UX System Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    initBackgroundParallax();
    initPopupEngine();
});

/**
 * Animates the neon SVG heartbeat background subtly based on cursor motion.
 */
function initBackgroundParallax() {
    const neonBg = document.getElementById('neonBg');
    if (!neonBg) return;

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        // Soft dampening layout shift
        const moveX = mouseX * 30; 
        const moveY = mouseY * 30;

        neonBg.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });
}

/**
 * Handles modal generation triggers without intercepting body scroll mechanics.
 */
function initPopupEngine() {
    const overlay = document.getElementById('popupOverlay');
    const popupBody = document.getElementById('dynamicPopupBody');
    const closeBtn = document.getElementById('closePopup');
    
    // Virtual Database Asset Repository
    const assetDatabase = {
        p1: { title: "The Golden Hour Wristwatch", price: "$299.00", link: "#", desc: "Crafted out of top-tier pristine premium components. Complete with internal automated configuration setups and a shimmering golden layout line." },
        p2: { title: "Aura Leather Pouch", price: "$145.00", link: "#", desc: "A sleek structural pouch designed to seamlessly hold structural assets. Embellished with physical hand-spun gold leaf threads." },
        p3: { title: "Midas Silk Scarf", price: "$85.00", link: "#", desc: "100% natural organically derived mulberry silk weave structure. Elevates everyday business casual layouts into royal affairs." },
        b1: { title: "Architecting Minimalist Wealth", author: "Midas Staff", desc: "Wealth accumulation looks different inside contemporary premium design philosophies. In this comprehensive deep dive, we outline the exact systems high-earning networks utilize to maintain high-impact minimalist asset collections without overwhelming daily operational workflow frameworks." },
        b2: { title: "The Neon Renaissance", author: "Aesthetic Core", desc: "How contrast elements determine customer acquisition. Modern visual branding systems have seen an unprecedented migration back toward custom radiant typography frameworks and structural lighting vectors. Explore why gold and neon elements command unmatched user attention vectors in 2026." },
        b3: { title: "Affiliate Masterclass", author: "Pouch Admin", desc: "Building sustainable revenue pathways through clean interface layouts. Long-term conversion tracking is directly dependent on UI readability metrics. Dense walls of information fail to captivate modern users. Clean execution pipelines and fluid modal overlays ensure a frictionless user journey." }
    };

    // Item card clicks
    document.querySelectorAll('.collage-item').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const data = assetDatabase[id];
            if (!data) return;

            if (card.getAttribute('data-type') === 'product') {
                popupBody.innerHTML = `
                    <h2 style="font-family:'Cinzel', serif; margin-bottom:15px; color:#d4af37;">${data.title}</h2>
                    <h3 style="margin-bottom:20px; font-weight:600;">Price: ${data.price}</h3>
                    <p style="line-height:1.6; color:#444; margin-bottom:25px;">${data.desc}</p>
                    <a href="${data.link}" class="gold-btn" style="display:inline-block; text-decoration:none; text-align:center;">Purchase via Partner Link</a>
                `;
            } else {
                popupBody.innerHTML = `
                    <h2 style="font-family:'Cinzel', serif; margin-bottom:10px; color:#d4af37;">${data.title}</h2>
                    <p style="font-style:italic; font-size:0.85rem; color:#888; margin-bottom:20px;">Written by ${data.author}</p>
                    <p style="line-height:1.7; color:#333;">${data.desc}</p>
                `;
            }
            openModal(overlay);
        });
    });

    // "See More Products" button trigger
    document.getElementById('seeMoreProducts').addEventListener('click', () => {
        popupBody.innerHTML = `
            <h2 style="font-family:'Cinzel', serif; margin-bottom:20px; text-align:center;">Premium Marketplace</h2>
            <p style="text-align:center; margin-bottom:20px; color:#666;">Our complete affiliate extended inventory catalog is currently updating.</p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; max-height:300px; overflow-y:auto; padding:10px;">
                <div style="border:1px solid #eee; padding:15px; text-align:center;">Item Delta - Coming Soon</div>
                <div style="border:1px solid #eee; padding:15px; text-align:center;">Item Epsilon - Coming Soon</div>
                <div style="border:1px solid #eee; padding:15px; text-align:center;">Item Zeta - Coming Soon</div>
                <div style="border:1px solid #eee; padding:15px; text-align:center;">Item Eta - Coming Soon</div>
            </div>
        `;
        openModal(overlay);
    });

    // "See More Blogs" button trigger
    document.getElementById('seeMoreBlogs').addEventListener('click', () => {
        popupBody.innerHTML = `
            <h2 style="font-family:'Cinzel', serif; margin-bottom:20px; text-align:center;">The Extended Vault</h2>
            <p style="text-align:center; margin-bottom:20px; color:#666;">Unlock premium lifestyle literature archives updated weekly.</p>
            <ul style="list-style:none; line-height:2.5; padding:0 10px;">
                <li>🔒 <a href="#" style="color:#d4af37; text-decoration:none; font-weight:600;">The Micro-Affiliate Loophole for 2026</a></li>
                <li>🔒 <a href="#" style="color:#d4af37; text-decoration:none; font-weight:600;">E-Commerce Design Patterns: From Standard to High Luxury</a></li>
                <li>🔒 <a href="#" style="color:#d4af37; text-decoration:none; font-weight:600;">Curating Gold Palettes Without Disruption</a></li>
            </ul>
        `;
        openModal(overlay);
    });

    // Close actions
    closeBtn.addEventListener('click', () => closeModal(overlay));
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(overlay);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal(overlay);
    });
}

function openModal(overlay) {
    overlay.classList.add('active');
    // Note: body overflow hidden is NOT applied here, explicitly allowing 
    // page background/foreground navigation scrolling as ordered.
}

function closeModal(overlay) {
    overlay.classList.remove('active');
}