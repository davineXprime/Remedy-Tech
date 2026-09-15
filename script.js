// Remedy Tech Zone Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
    // Article Database for Pop-Out Modal & Load More
    const articlesData = {
        1: {
            title: "Why Smart Rings Are Dominating Wearable Tech in 2026",
            category: "SMART RINGS",
            date: "Sep 7, 2026",
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
            readTime: "5 min read",
            content: `
                <p>Smart rings have officially taken center stage in 2026's wearable device market. Offering discreet form factors, multi-day battery life, and unparalleled sleep tracking accuracy, millions of users are migrating from traditional smartwatches to ultra-lightweight rings.</p>
                <p>Equipped with advanced photoplethysmography (PPG) sensors, skin temperature monitoring, and continuous pulse oximetry, smart rings deliver actionable health metrics without screen notifications or daily charging hassles.</p>
                <p>Key innovations this year include biometric contactless payments, stress response mapping, and seamless sync with AI health coaches.</p>
            `
        },
        2: {
            title: "Meta Smart Glasses: The Next Frontier in Hands-Free Tech",
            category: "META SMART GLASSES",
            date: "Aug 28, 2026",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
            readTime: "6 min read",
            content: `
                <p>Meta's vision for ambient augmented reality is coming to full fruition in 2026. The latest smart glasses blend stylish eyewear design with multimodal AI assistant integration, spatial open-ear audio, and real-time visual translation.</p>
                <p>Users can ask questions about objects in front of them, receive real-time HUD navigation prompts, and record high-definition first-person video without looking down at a screen.</p>
                <p>This paradigm shift signals the transition from screen-bound mobility to hands-free spatial computing.</p>
            `
        },
        3: {
            title: "The Best Smartwatches for Health and Performance in 2026",
            category: "SMARTWATCHES",
            date: "Aug 15, 2026",
            image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80",
            readTime: "7 min read",
            content: `
                <p>While smart rings excel at passive recovery tracking, modern smartwatches remain the undisputed kings of real-time athletic performance and active navigation.</p>
                <p>In 2026, top-tier wearables feature dual-frequency GPS, non-invasive blood glucose trend estimations, lactate threshold tracking, and multi-day battery technology.</p>
                <p>Whether you're training for a marathon or optimizing daily VO2 max, our deep dive analyzes the top 5 smartwatches tested in extreme environments.</p>
            `
        }
    };

    // Extra articles for "+ More Articles" feature
    const extraArticles = [
        {
            id: 4,
            title: "Next-Gen AI Wearables: Beyond the Screen",
            category: "smartwatches",
            categoryName: "HEALTH TECH",
            date: "Aug 02, 2026",
            image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
            excerpt: "Explore how contextual AI hardware is creating seamless, invisible computing experiences everyday.",
            readTime: "4 min read",
            content: "<p>Artificial intelligence is moving off our screens and into our physical atmosphere. Ambient AI clips and pin wearables are reshaping how we interact with information, allowing natural voice interaction and proactive contextual advice.</p>"
        },
        {
            id: 5,
            title: "Continuous Glucose Monitoring for Non-Diabetics",
            category: "smart-rings",
            categoryName: "HEALTH TECH",
            date: "Jul 22, 2026",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            excerpt: "How biohackers and athletes are using continuous glucose monitoring to optimize energy levels.",
            readTime: "6 min read",
            content: "<p>Metabolic health tracking is no longer restricted to clinical conditions. CGM technology integration into consumer wearables allows users to prevent energy crashes, optimize workout fuel, and tailor dietary habits with precision.</p>"
        }
    ];

    // Filter Functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const articleCards = document.querySelectorAll('.article-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            articleCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Article Modal Pop-Out Handler
    const modal = document.getElementById('articleModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');

    function openModal(article) {
        modalBody.innerHTML = `
            <div class="modal-article-header">
                <span class="badge badge-green">${article.category || article.categoryName}</span>
                <h2 class="modal-article-title">${article.title}</h2>
                <div class="modal-meta">
                    <span>${article.date}</span>
                    <span>•</span>
                    <span>${article.readTime}</span>
                </div>
            </div>
            <div class="modal-img-container">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="modal-body-text">
                ${article.content}
            </div>
        `;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Attach click listeners to Read More buttons
    document.addEventListener('click', (e) => {
        const readMoreBtn = e.target.closest('.read-more-btn');
        if (readMoreBtn) {
            const articleId = readMoreBtn.getAttribute('data-id');
            const article = articlesData[articleId] || extraArticles.find(a => a.id == articleId);
            if (article) {
                openModal(article);
            }
        }
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Load More Articles Button Handler
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const articlesGrid = document.getElementById('articlesGrid');

    loadMoreBtn.addEventListener('click', () => {
        extraArticles.forEach(item => {
            const articleCard = document.createElement('article');
            articleCard.className = 'article-card';
            articleCard.setAttribute('data-category', item.category);
            articleCard.innerHTML = `
                <div class="card-image-wrap">
                    <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
                    <span class="badge badge-green">${item.categoryName}</span>
                    <span class="card-date">${item.date}</span>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-excerpt">${item.excerpt}</p>
                    <button class="btn btn-outline read-more-btn" data-id="${item.id}">
                        Read More
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                </div>
            `;
            articlesGrid.appendChild(articleCard);
        });

        loadMoreBtn.style.display = 'none';
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
