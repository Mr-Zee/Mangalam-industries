/* ===================== FEATURE CARDS ===================== */
// keeping the card data here so it's easy to update without touching the HTML
(function initFeatureCards() {
    const grid = document.getElementById('featuresGrid');
    if (!grid) return;

    const features = [
        {
            title: 'Superior Chemical Resistance',
            desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
            icon: `<svg class="feature-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 2v4m6-4v4M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
        },
        {
            title: 'Exceptional Flexibility & Durability',
            desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
            icon: `<svg class="feature-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        },
        {
            title: 'Leak-Proof Fusion Welding',
            desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
            icon: `<svg class="feature-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
        },
        {
            title: 'Cost-Effective Long-Term Solution',
            desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
            icon: `<svg class="feature-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" stroke-width="1.6"/></svg>`,
        },
        {
            title: 'Environmentally Sustainable',
            desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
            icon: `<svg class="feature-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        },
        {
            title: 'Certified Quality Assurance',
            desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
            icon: `<svg class="feature-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M16 11l1.5 1.5L21 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        },
    ];

    grid.innerHTML = features.map(({ title, desc, icon }) => `
        <div class="feature-card">
            ${icon}
            <span class="feature-card-title">${title}</span>
            <p class="feature-subtext section-subheader">${desc}</p>
        </div>
    `).join('');
})();


/* ===================== PORTFOLIO CARDS ===================== */
// same pattern as feature cards - data lives here, HTML just has an empty mount point
(function initPortfolioCards() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    const portfolio = [
        {
            title: 'HDPE Fittings & Accessories',
            desc: 'Complete range of electrofusion and butt fusion fittings, including elbows, tees, reducers, and couplers for seamless pipe connections.',
            img: 'images/portfolio-card-1.png',
            alt: 'HDPE Fittings and Accessories',
        },
        {
            title: 'Professional Installation Services',
            desc: 'Expert installation and fusion welding services ensuring optimal system performance, compliance with standards, and long-term reliability.',
            img: 'images/portfolio-card-2.png',
            alt: 'Professional pipe installation',
        },
        {
            title: 'PE-RT Heating Pipes',
            desc: 'Polyethylene of Raised Temperature resistance pipes ideal for underfloor heating, radiator connections, and hot water applications.',
            img: 'images/portfolio-card-1.png',
            alt: 'PE-RT heating pipes',
        },
    ];

    grid.innerHTML = portfolio.map(({ title, desc, img, alt }) => `
        <div class="feature-card">
            <span class="feature-card-title">${title}</span>
            <p class="feature-subtext section-subheader">${desc}</p>
            <img src="${img}" alt="${alt}" loading="lazy">
            <button class="feature-card-button">Learn More</button>
        </div>
    `).join('');
})();


/* ===================== STICKY HEADER ===================== */
// watches the hero section - once it leaves the viewport, .scrolled gets added to the wrapper
// that triggers the sticky product bar to slide in and the nav to hide
(function initStickyHeader() {
    const headerWrapper = document.querySelector('.header-wrapper');
    const heroSection = document.querySelector('.hero-section');

    if (headerWrapper && heroSection) {
        const observer = new IntersectionObserver(
            (entries) => {
                headerWrapper.classList.toggle('scrolled', !entries[0].isIntersecting);
            },
            { threshold: 0 }
        );
        observer.observe(heroSection);
    }
})();


/* ===================== IMAGE CAROUSEL ===================== */
// handles all carousels on the page - scoped to each .carousel-wrap so they work independently
(function initCarousels() {
    document.querySelectorAll('.carousel-wrap').forEach(wrap => {
        const thumbs = Array.from(wrap.querySelectorAll('.thumb-item'));
        const mainImg = wrap.querySelector('.carousel-main-img');
        const prevBtn = wrap.querySelector('.carousel-prev');
        const nextBtn = wrap.querySelector('.carousel-next');

        if (!mainImg || thumbs.length === 0) return;

        let current = 0;

        function setSlide(index) {
            thumbs[current].classList.remove('active');
            current = (index + thumbs.length) % thumbs.length;
            thumbs[current].classList.add('active');
            mainImg.src = thumbs[current].dataset.src;
            // sync zoom panel only for the product carousel
            if (mainImg.id === 'carouselMainImg') {
                const zoomPanel = document.getElementById('zoomPanel');
                if (zoomPanel && zoomPanel.style.display === 'block') {
                    zoomPanel.style.backgroundImage = `url(${mainImg.src})`;
                }
            }
        }

        thumbs.forEach((thumb, i) => {
            thumb.addEventListener('click', () => setSlide(i));
        });

        if (prevBtn) prevBtn.addEventListener('click', () => setSlide(current - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => setSlide(current + 1));
    });
})();


/* ===================== IMAGE ZOOM ===================== */
// shows a magnified panel next to the image on hover - prefers right side, falls back to left
// zoom is disabled when hovering over the prev/next buttons
(function initZoom() {
    const imgBox   = document.getElementById('carouselImgBox');
    const mainImg  = document.getElementById('carouselMainImg');
    const lens     = document.getElementById('zoomLens');
    const panel    = document.getElementById('zoomPanel');

    if (!imgBox || !mainImg || !lens || !panel) return;

    const ZOOM      = 3;
    const LENS_W    = 130;
    const LENS_H    = 130;

    function getPos(e) {
        const rect = imgBox.getBoundingClientRect();
        let x = e.clientX - rect.left - LENS_W / 2;
        let y = e.clientY - rect.top  - LENS_H / 2;
        x = Math.max(0, Math.min(x, rect.width  - LENS_W));
        y = Math.max(0, Math.min(y, rect.height - LENS_H));
        return { x, y, rect };
    }

    function placePanelNextToBox() {
        const rect = imgBox.getBoundingClientRect();
        const panelW = 380;
        const gap = 16;
        // prefer right; fall back to left if off-screen
        const leftRight = rect.right + gap;
        const leftLeft  = rect.left  - panelW - gap;
        panel.style.top  = rect.top + 'px';
        panel.style.left = (leftRight + panelW <= window.innerWidth ? leftRight : leftLeft) + 'px';
    }

    function isOverBtn(e) {
        return !!e.target.closest('.carousel-btn');
    }

    imgBox.addEventListener('mouseenter', (e) => {
        if (isOverBtn(e)) return;
        placePanelNextToBox();
        lens.style.display  = 'block';
        panel.style.display = 'block';
    });

    imgBox.addEventListener('mouseleave', () => {
        lens.style.display  = 'none';
        panel.style.display = 'none';
    });

    imgBox.addEventListener('mousemove', (e) => {
        if (isOverBtn(e)) {
            lens.style.display  = 'none';
            panel.style.display = 'none';
            return;
        }

        lens.style.display  = 'block';
        panel.style.display = 'block';

        const { x, y, rect } = getPos(e);

        lens.style.left = x + 'px';
        lens.style.top  = y + 'px';

        // reposition panel in case of scroll
        placePanelNextToBox();

        const bgW = rect.width  * ZOOM;
        const bgH = rect.height * ZOOM;
        const bgX = -(x * ZOOM);
        const bgY = -(y * ZOOM);

        panel.style.backgroundImage    = `url(${mainImg.src})`;
        panel.style.backgroundSize     = `${bgW}px ${bgH}px`;
        panel.style.backgroundPosition = `${bgX}px ${bgY}px`;
    });
})();


/* ===================== MANUFACTURING PROCESS ===================== */
// tab-based step viewer - clicking a tab or the prev/next buttons calls render()
// which swaps the title, description, bullets and syncs the active tab state
(function initManufacturing() {
    const steps = [
        {
            tab: 'Raw Material',
            title: 'High-Grade Raw Material Selection',
            desc: 'Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.',
            bullets: ['PE100 grade material', 'Optimal molecular weight distribution'],
        },
        {
            tab: 'Extrusion',
            title: 'Precision Extrusion Process',
            desc: 'Advanced twin-screw extruders process HDPE at precise temperatures, ensuring consistent melt flow and optimal molecular chain alignment.',
            bullets: ['Temperature-controlled barrel zones', 'Consistent melt pressure control'],
        },
        {
            tab: 'Cooling',
            title: 'Controlled Cooling System',
            desc: 'A calibrated water-cooling tank rapidly stabilises pipe dimensions immediately after extrusion, locking in tolerances.',
            bullets: ['Vacuum-assisted calibration', 'Uniform wall thickness retention'],
        },
        {
            tab: 'Sizing',
            title: 'Accurate Sizing & Calibration',
            desc: 'Precision sizing sleeves and haul-off units maintain exact outer diameter and ovality within ISO 4427 tolerances.',
            bullets: ['Laser diameter measurement', 'Real-time dimensional feedback'],
        },
        {
            tab: 'Quality Control',
            title: 'Rigorous Quality Control',
            desc: 'Every batch undergoes hydrostatic pressure testing, impact resistance checks, and chemical composition verification.',
            bullets: ['IS 5984 & ISO 4427 compliance', 'Full batch traceability records'],
        },
        {
            tab: 'Marking',
            title: 'Product Marking & Identification',
            desc: 'Permanent inkjet marking at regular intervals captures grade, diameter, pressure rating, and production date for complete traceability.',
            bullets: ['BIS-mandated marking parameters', 'UV-stable ink for outdoor use'],
        },
        {
            tab: 'Cutting',
            title: 'Precision Cutting',
            desc: 'Automated planetary cutters deliver clean, square pipe ends with no burrs, ready for immediate butt fusion or electrofusion jointing.',
            bullets: ['Servo-controlled cut length', 'Zero-burr blade technology'],
        },
        {
            tab: 'Packaging',
            title: 'Final Packaging & Dispatch',
            desc: 'Pipes are coiled or cut to length, bundled with UV-protective wrapping, and palletised to prevent damage during transit.',
            bullets: ['Coils up to 500 m for small diameters', 'Bar-coded pallet manifests'],
        },
    ];

    const totalSteps = steps.length;
    let current = 0;

    const titleEl    = document.getElementById('mfgTitle');
    const descEl     = document.getElementById('mfgDesc');
    const bulletsEl  = document.getElementById('mfgBullets');
    const badgeEl    = document.getElementById('mfgStepBadge');
    const tabs       = Array.from(document.querySelectorAll('.mfg-tab'));
    const prevBtn    = document.getElementById('mfgPrev');
    const nextBtn    = document.getElementById('mfgNext');

    if (!titleEl || tabs.length === 0) return;

    const checkSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#2B3990"/><path d="M6 10l3 3 5-5" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    function render(index) {
        const step = steps[index];

        titleEl.textContent   = step.title;
        descEl.textContent    = step.desc;
        badgeEl.textContent   = `Step ${index + 1}/${totalSteps}: ${step.tab}`;

        bulletsEl.innerHTML = step.bullets
            .map(b => `<li>${checkSvg}${b}</li>`)
            .join('');

        tabs.forEach((t, i) => {
            const isActive = i === index;
            t.classList.toggle('active', isActive);
            t.setAttribute('aria-selected', String(isActive));
        });

        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === totalSteps - 1;

        current = index;
    }

    tabs.forEach((tab, i) => tab.addEventListener('click', () => render(i)));
    if (prevBtn) prevBtn.addEventListener('click', () => render(Math.max(0, current - 1)));
    if (nextBtn) nextBtn.addEventListener('click', () => render(Math.min(totalSteps - 1, current + 1)));

    render(0);
})();


/* ===================== APPLICATIONS CAROUSEL ===================== */
// scrolls the applications strip left/right by one card width on button click
(function initApplicationsCarousel() {
    const wrapper = document.getElementById('applicationsWrapper');
    const prevBtn = document.getElementById('appPrev');
    const nextBtn = document.getElementById('appNext');

    if (!wrapper || !prevBtn || !nextBtn) return;

    const CARD_WIDTH = 340 + 20; // card width + gap

    prevBtn.addEventListener('click', () => {
        wrapper.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        wrapper.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
    });
})();


/* ===================== TESTIMONIALS DRAG SCROLL ===================== */
// lets users drag the testimonials row horizontally with their mouse
(function initTestimonialsDrag() {
    const wrapper = document.querySelector('.testimonials-scroll-wrapper');
    if (!wrapper) return;

    let isDown = false, startX = 0, scrollLeft = 0;

    wrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
    });

    wrapper.addEventListener('mouseleave', () => { isDown = false; });
    wrapper.addEventListener('mouseup',    () => { isDown = false; });

    wrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - wrapper.offsetLeft;
        wrapper.scrollLeft = scrollLeft - (x - startX);
    });
})();


/* ===================== FAQ ACCORDION ===================== */
// clicking a question expands it and collapses any other open one
(function initFaq() {
    document.querySelectorAll('.faq-item').forEach((item) => {
        const btn = item.querySelector('.faq-question');

        item.addEventListener('click', (e) => {
            if (e.target.closest('.faq-answer')) return;

            const isOpen = item.classList.contains('open');

            // close all
            document.querySelectorAll('.faq-item.open').forEach(el => {
                el.classList.remove('open');
                const b = el.querySelector('.faq-question');
                if (b) b.setAttribute('aria-expanded', 'false');
            });

            // open clicked one unless it was already open
            if (!isOpen) {
                item.classList.add('open');
                if (btn) btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
})();


/* ===================== MODALS ===================== */
// shared helper so both modals reuse the same open/close logic instead of duplicating it
// backdrop click and Escape key both close the modal
function initModal(modalId, openBtnId, closeBtnId, options) {
    const modal    = document.getElementById(modalId);
    const openBtns = Array.from(document.querySelectorAll(`[id="${openBtnId}"]`));
    const closeBtn = document.getElementById(closeBtnId);

    if (!modal || openBtns.length === 0 || !closeBtn) return;

    function open() {
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function close() {
        modal.hidden = true;
        document.body.style.overflow = '';
        openBtns[0].focus();
    }

    openBtns.forEach(btn => btn.addEventListener('click', open));
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) close(); });

    if (options && options.onInit) options.onInit(modal);
}

function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
}

// request a call back modal - opens from the Request a Quote button
initModal('quoteModal', 'openQuoteModal', 'closeQuoteModal');

// catalogue modal - download button stays disabled until a valid email is entered
initModal('catalogueModal', 'openCatalogueModal', 'closeCatalogueModal', {
    onInit() {
        const emailInput = document.getElementById('modalEmail');
        const submitBtn  = document.getElementById('modalSubmit');
        if (emailInput && submitBtn) {
            emailInput.addEventListener('input', () => {
                submitBtn.disabled = !validateEmail(emailInput.value);
            });
        }
    }
});
