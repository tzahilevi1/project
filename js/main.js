// ============================================
// FOX MOTORS — Main JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- Header scroll effect ----
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.pageYOffset > 60);
    }, { passive: true });

    // ---- Hero background zoom ----
    const heroBg = document.querySelector('.hero__bg');
    if (heroBg) setTimeout(() => heroBg.classList.add('loaded'), 80);

    // ---- Hamburger / Mobile menu ----
    const hamburger   = document.getElementById('hamburger');
    const mobileMenu  = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active', open);
        document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ---- Smooth scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.pageYOffset - 76,
                behavior: 'smooth'
            });
        });
    });

    // ---- Fade-up on scroll ----
    const fadeEls = document.querySelectorAll('.fade-up');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            // Stagger siblings in same parent
            const siblings = [...entry.target.parentElement.querySelectorAll('.fade-up:not(.visible)')];
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => entry.target.classList.add('visible'), idx * 90);
            fadeObserver.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => fadeObserver.observe(el));

    // ---- Counter animation ----
    function animateCount(el, target, duration = 1400) {
        const start = Date.now();
        const tick = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            animateCount(entry.target, parseInt(entry.target.dataset.target));
            counterObserver.unobserve(entry.target);
        });
    }, { threshold: 0.6 });

    document.querySelectorAll('.hero__stat-number[data-target]')
        .forEach(el => counterObserver.observe(el));

    // ---- Back to top ----
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.pageYOffset > 500);
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ---- Active nav link ----
    const sections  = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav__link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.pageYOffset >= section.offsetTop - 120) current = section.id;
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });

    // ---- Form submit ----
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.textContent = 'שולח...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = '✓ הפנייה נשלחה בהצלחה!';
                btn.style.background = '#2ecc71';
                btn.style.borderColor = '#2ecc71';

                setTimeout(() => {
                    btn.textContent = 'שלחו פנייה';
                    btn.style.background = '';
                    btn.style.borderColor = '';
                    btn.disabled = false;
                    form.reset();
                }, 3500);
            }, 900);
        });
    }

});
