/* Shared JS — accordion, tabs, stat counter, intersection reveal. */

// 1. Intersection-based reveal animation
document.addEventListener('DOMContentLoaded', () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // 2. Animated stat counter
  const counters = document.querySelectorAll('[data-counter]');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString('id-ID') + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterIO.observe(el));

  // 3. Accordion (FAQ)
  document.querySelectorAll('[data-accordion]').forEach(acc => {
    acc.querySelectorAll('[data-accordion-trigger]').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('[data-accordion-item]');
        const isOpen = item.classList.contains('is-open');
        acc.querySelectorAll('[data-accordion-item]').forEach(i => i.classList.remove('is-open'));
        if (!isOpen) item.classList.add('is-open');
      });
    });
  });

  // 4. Tabs (dual-path selector, etc)
  document.querySelectorAll('[data-tabs]').forEach(tabs => {
    const triggers = tabs.querySelectorAll('[data-tab-trigger]');
    const panels = tabs.querySelectorAll('[data-tab-panel]');
    triggers.forEach(tr => {
      tr.addEventListener('click', () => {
        const key = tr.dataset.tabTrigger;
        triggers.forEach(t => t.classList.toggle('is-active', t === tr));
        panels.forEach(p => p.classList.toggle('hidden', p.dataset.tabPanel !== key));
      });
    });
  });

  // 5. Mobile nav toggle
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }

  // 6. Language toggle (demo only)
  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = btn.textContent.trim();
      btn.textContent = current === 'EN' ? 'ID' : 'EN';
    });
  });
});
