// Load saved data from admin panel and apply to the site
(function() {
    const STORAGE_KEY = 'premiumpack_data';
    let data;
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) data = JSON.parse(saved);
    } catch (e) {}
    if (!data) return;

    const g = data.general || {};

    // ===== General: Top Bar =====
    const topBarLeft = document.querySelector('.top-bar-left');
    if (topBarLeft && g.phone) {
        topBarLeft.innerHTML = `
            <span><i class="fas fa-phone"></i> ${g.phone}</span>
            <span><i class="fas fa-envelope"></i> ${g.email}</span>
        `;
    }

    // ===== General: Social Links =====
    const topBarRight = document.querySelector('.top-bar-right');
    if (topBarRight) {
        topBarRight.innerHTML = `
            <a href="${g.facebook || '#'}"><i class="fab fa-facebook-f"></i></a>
            <a href="${g.instagram || '#'}"><i class="fab fa-instagram"></i></a>
            <a href="${g.linkedin || '#'}"><i class="fab fa-linkedin-in"></i></a>
            <a href="${g.whatsapp || '#'}"><i class="fab fa-whatsapp"></i></a>
        `;
    }

    // ===== General: Company Name =====
    document.querySelectorAll('.logo-text').forEach(el => {
        if (g.companyName) {
            el.innerHTML = g.companyName.replace(/([A-Z][a-z]*)/g, (m, p, offset) => {
                return (offset === 0 ? '' : '') + p;
            }) + '<span class="accent">' + (g.companyName.match(/[A-Z][a-z]*$/)?.[0] || '') + '</span>';
        }
    });

    // ===== Hero Slides =====
    const hero = data.hero;
    if (hero && hero.length > 0) {
        const slider = document.querySelector('.hero-slider');
        const dotsContainer = document.querySelector('.slider-dots');
        if (slider) {
            slider.innerHTML = hero.map((s, i) => `
                <div class="hero-slide${i === 0 ? ' active' : ''}" style="background-image: url('${s.image}')">
                    <div class="hero-overlay"></div>
                    <div class="hero-content">
                        <h4 class="hero-subtitle animate-in">${s.subtitle}</h4>
                        <h1 class="hero-title animate-in delay-1">${s.title}</h1>
                        <p class="hero-desc animate-in delay-2">${s.description}</p>
                        <div class="hero-buttons animate-in delay-3">
                            <a href="${s.btn1Link}" class="btn btn-primary">${s.btn1Text}</a>
                            <a href="${s.btn2Link}" class="btn btn-outline">${s.btn2Text}</a>
                        </div>
                    </div>
                </div>
            `).join('');
            if (dotsContainer) {
                dotsContainer.innerHTML = hero.map((_, i) =>
                    `<span class="dot${i === 0 ? ' active' : ''}" data-slide="${i}"></span>`
                ).join('');
            }
        }
    }

    // ===== About =====
    const about = data.about;
    if (about) {
        const aboutTitle = document.querySelector('#about .section-title');
        if (aboutTitle) aboutTitle.textContent = about.title;

        const aboutTexts = document.querySelectorAll('#about .about-text');
        if (aboutTexts[0]) aboutTexts[0].textContent = about.text1;
        if (aboutTexts[1]) aboutTexts[1].textContent = about.text2;

        const expBadge = document.querySelector('.experience-badge');
        if (expBadge) {
            expBadge.innerHTML = `<span class="exp-number">${about.expNumber}</span><span class="exp-text">${about.expText}</span>`;
        }

        const featuresContainer = document.querySelector('#about .about-features');
        if (featuresContainer && about.features) {
            featuresContainer.innerHTML = about.features.map(f => `
                <div class="feature-item">
                    <div class="feature-icon"><i class="${f.icon}"></i></div>
                    <div>
                        <h4>${f.title}</h4>
                        <p>${f.desc}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    // ===== Services =====
    const services = data.services;
    if (services) {
        const container = document.querySelector('#services .services-grid');
        if (container) {
            container.innerHTML = services.map(s => `
                <div class="service-card">
                    <div class="service-icon"><i class="${s.icon}"></i></div>
                    <h3>${s.title}</h3>
                    <p>${s.desc}</p>
                    <a href="#contact" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            `).join('');
        }
    }

    // ===== Products =====
    const products = data.products;
    if (products) {
        const container = document.querySelector('#products .products-grid');
        if (container) {
            container.innerHTML = products.map(p => `
                <div class="product-card">
                    <div class="product-img" style="background-image: url('${p.image}')">
                        <div class="product-overlay">
                            <a href="#contact" class="btn btn-sm">Get Quote</a>
                        </div>
                    </div>
                    <div class="product-info">
                        <h4>${p.title}</h4>
                        <p>${p.desc}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    // ===== FAQ =====
    const faq = data.faq;
    if (faq) {
        const container = document.querySelector('#faq .faq-right');
        if (container) {
            container.innerHTML = faq.map(f => `
                <div class="faq-item">
                    <button class="faq-question">
                        <span>${f.q}</span>
                        <i class="fas fa-plus"></i>
                    </button>
                    <div class="faq-answer">
                        <p>${f.a}</p>
                    </div>
                </div>
            `).join('');
            // Re-bind FAQ accordion
            document.querySelectorAll('.faq-question').forEach(btn => {
                btn.addEventListener('click', () => {
                    const item = btn.parentElement;
                    const isActive = item.classList.contains('active');
                    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                    if (!isActive) item.classList.add('active');
                });
            });
        }
    }

    // ===== Contact =====
    const contact = data.contact;
    if (contact) {
        const contactTitle = document.querySelector('#contact .section-title');
        if (contactTitle) contactTitle.textContent = contact.title;

        const contactDesc = document.querySelector('#contact .contact-info > p');
        if (contactDesc) contactDesc.textContent = contact.desc;

        const hoursEl = document.querySelector('#contact .contact-item:last-child p');
        if (hoursEl) hoursEl.textContent = contact.hours;
    }

    // ===== Footer =====
    const footer = data.footer;
    if (footer) {
        const footerDesc = document.querySelector('.footer-col p');
        if (footerDesc) footerDesc.textContent = footer.desc;

        const copyright = document.querySelector('.footer-bottom p');
        if (copyright) copyright.textContent = footer.copyright;

        const nlText = document.querySelector('.footer-col:last-child p');
        if (nlText) nlText.textContent = footer.newsletter;
    }
})();
