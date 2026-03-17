/* ============================================================
   canvas.js — Particle Background + Spear Grid
   Alkebuleum · alkebuleum.org
   ============================================================ */

(function () {
  const canvas = document.getElementById('bgc');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // ── Config ──────────────────────────────────────────────
  const CONFIG = {
    particleCount: 55,
    connectionDist: 105,
    particleColors: ['#0E4F6E', '#CBB294', '#A97855', '#2d5a3d'],
    spearGridSpacing: 160,
    spearOpacity: 0.04,
    spearColor: '#CBB294',
  };

  let W, H, particles;

  // ── Resize ──────────────────────────────────────────────
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  // ── Particle ────────────────────────────────────────────
  function createParticle() {
    return {
      x:    Math.random() * W,
      y:    Math.random() * H,
      vx:   (Math.random() - 0.5) * 0.4,
      vy:   (Math.random() - 0.5) * 0.4,
      r:    Math.random() * 1.5 + 0.5,
      color: CONFIG.particleColors[Math.floor(Math.random() * CONFIG.particleColors.length)],
      alpha: Math.random() * 0.5 + 0.2,
    };
  }

  function initParticles() {
    particles = Array.from({ length: CONFIG.particleCount }, createParticle);
  }

  // ── Draw Spear Symbol ────────────────────────────────────
  // Minimal spear mark: diamond + spine + chevrons
  function drawSpear(cx, cy, size) {
    const s = size;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.strokeStyle = CONFIG.spearColor;
    ctx.globalAlpha = CONFIG.spearOpacity;
    ctx.lineWidth = 0.8;
    ctx.lineJoin = 'round';

    // Diamond
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.lineTo(s * 0.5, 0);
    ctx.lineTo(0, s);
    ctx.lineTo(-s * 0.5, 0);
    ctx.closePath();
    ctx.stroke();

    // Spine
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.lineTo(0, s);
    ctx.stroke();

    // Left chevron >
    ctx.beginPath();
    ctx.moveTo(-s * 0.5, -s * 0.15);
    ctx.lineTo(-s * 0.2, 0);
    ctx.lineTo(-s * 0.5, s * 0.15);
    ctx.stroke();

    // Right chevron <
    ctx.beginPath();
    ctx.moveTo(s * 0.5, -s * 0.15);
    ctx.lineTo(s * 0.2, 0);
    ctx.lineTo(s * 0.5, s * 0.15);
    ctx.stroke();

    ctx.restore();
  }

  // ── Draw Loop ────────────────────────────────────────────
  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Spear grid background
    const spacing = CONFIG.spearGridSpacing;
    for (let x = spacing / 2; x < W; x += spacing) {
      for (let y = spacing / 2; y < H; y += spacing) {
        drawSpear(x, y, 18);
      }
    }

    // Particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();

      // Connections
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.connectionDist) {
          const opacity = (1 - dist / CONFIG.connectionDist) * 0.15;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = '#CBB294';
          ctx.globalAlpha = opacity;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  // ── Init ────────────────────────────────────────────────
  resize();
  initParticles();
  draw();

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });
})();
