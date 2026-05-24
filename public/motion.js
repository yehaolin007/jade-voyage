(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  function initReveal() {
    const targets = document.querySelectorAll(
      '.hero-copy, .hero-photo, .service-card, .stat-dark, .tour-card, .story-card, .why-row, .why-image-wrap, .why-caption, .cta-collage .tile, .cta-copy, .trust-logo, .step, .product-gallery, .product-panel, .day-section, .included-item, .review-panel'
    );
    targets.forEach((el, index) => {
      el.classList.add('motion-reveal');
      const parent = el.parentElement;
      const siblings = parent ? Array.from(parent.children).filter((child) => child.matches && child.matches('.service-card, .stat-dark, .tour-card, .story-card, .why-row, .why-image-wrap, .why-caption, .trust-logo, .step, .tile, .day-section, .included-item')) : [];
      const localIndex = siblings.indexOf(el);
      const delayIndex = localIndex >= 0 ? localIndex : index % 5;
      const delay = el.matches('.why-caption') ? 260 : Math.min(delayIndex, 5) * 120;
      el.style.setProperty('--motion-delay', `${delay}ms`);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    targets.forEach((el) => observer.observe(el));
  }

  function initCursor() {
    if (reduceMotion || !finePointer) return;
    const cursor = document.querySelector('.lux-cursor');
    const dot = document.querySelector('.lux-cursor-dot');
    if (!cursor || !dot) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    document.documentElement.classList.add('has-lux-cursor');
    window.addEventListener('mousemove', (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    }, { passive: true });

    function tick() {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(tick);
    }
    tick();

    document.querySelectorAll('a, button, select, .tour-card, .story-card, .service-card').forEach((el) => {
      el.addEventListener('mouseenter', () => document.documentElement.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.documentElement.classList.remove('cursor-hover'));
    });
  }

  function initParallax() {
    if (reduceMotion || !finePointer) return;
    const items = document.querySelectorAll('.hero-photo, .cta-collage .tile, .story-card .thumb, .tour-img, .why-image-wrap, .main-image, .thumb, .table-img');
    items.forEach((item) => {
      const img = item.querySelector('img');
      if (!img) return;

      item.addEventListener('mousemove', (event) => {
        const rect = item.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        img.style.setProperty('--mx', `${x * 7}px`);
        img.style.setProperty('--my', `${y * 7}px`);
      }, { passive: true });

      item.addEventListener('mouseleave', () => {
        img.style.setProperty('--mx', '0px');
        img.style.setProperty('--my', '0px');
      });
    });
  }

  function initNavShadow() {
    const nav = document.querySelector('nav.top');
    if (!nav) return;
    const sync = () => nav.classList.toggle('is-scrolled', window.scrollY > 12);
    sync();
    window.addEventListener('scroll', sync, { passive: true });
  }

  function init() {
    initReveal();
    initCursor();
    initParallax();
    initNavShadow();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
