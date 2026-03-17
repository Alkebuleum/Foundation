/* ============================================================
   nav.js — Scroll Behavior · Hamburger Menu
   Alkebuleum · alkebuleum.org
   ============================================================ */

(function () {
  const nav = document.getElementById('nav');
  const ham = document.getElementById('ham');
  const nul = document.getElementById('nul');

  if (!nav) return;

  // ── Scroll state ─────────────────────────────────────────
  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // ── Hamburger toggle ─────────────────────────────────────
  if (ham && nul) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('x');
      nul.classList.toggle('open');
    });

    // Close menu on nav link click (mobile)
    nul.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        ham.classList.remove('x');
        nul.classList.remove('open');
      });
    });
  }

  // ── Close menu on outside click ──────────────────────────
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      ham && ham.classList.remove('x');
      nul && nul.classList.remove('open');
    }
  });
})();
