/* ============================================================
   animations.js — Scroll Reveal · Custom Cursor
   Alkebuleum · alkebuleum.org
   ============================================================ */

(function () {

  // ── Scroll Reveal ────────────────────────────────────────
  // Mark body as JS-ready so CSS can enable animations
  document.body.classList.add('js-ready');

  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings within same parent
          const siblings = entry.target.parentElement.querySelectorAll('.reveal');
          let delay = 0;
          siblings.forEach((s, idx) => {
            if (s === entry.target) delay = idx * 85;
          });

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    reveals.forEach(el => observer.observe(el));
  }

  // ── Custom Cursor ────────────────────────────────────────
  const curR = document.getElementById('cR');
  const curD = document.getElementById('cD');

  if (!curR || !curD) return;

  let mouseX = 0, mouseY = 0;
  let dotX   = 0, dotY   = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Only hide native cursor once we confirm custom cursor is working
    document.body.classList.add('custom-cursor-active');
  }, { once: true });

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Hover effect on interactive elements
  const interactives = 'a, button, input, [role="button"], .ec, .pillar';

  document.addEventListener('mouseover', (e) => {
    if (e.target.matches(interactives) || e.target.closest(interactives)) {
      curD.querySelector('.cur-d').style.transform = 'translate(-50%, -50%) scale(1.8)';
      curD.querySelector('.cur-d').style.borderColor = 'rgba(203,178,148,0.8)';
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.matches(interactives) || e.target.closest(interactives)) {
      curD.querySelector('.cur-d').style.transform = 'translate(-50%, -50%) scale(1)';
      curD.querySelector('.cur-d').style.borderColor = 'rgba(203,178,148,0.5)';
    }
  });

  // Animate loop with lerp smoothing
  function animateCursor() {
    // Dot follows immediately
    dotX = mouseX;
    dotY = mouseY;

    // Ring follows with lerp (smooth lag)
    ringX += (mouseX - ringX) * 0.1;
    ringY += (mouseY - ringY) * 0.1;

    curR.style.transform = `translate(${dotX}px, ${dotY}px)`;
    curD.style.transform = `translate(${ringX}px, ${ringY}px)`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    curR.style.opacity = '0';
    curD.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    curR.style.opacity = '1';
    curD.style.opacity = '1';
  });

})();
