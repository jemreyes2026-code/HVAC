import { useEffect, useRef } from 'react';
import { useMagnetic } from '../hooks/useMagnetic.js';
import { CURTAIN_MS_MOTION } from './CurtainIntro.jsx';

export default function Hero({ noMotion }) {
  const canvasRef = useRef(null);
  const steamRef = useRef(null);
  const lineRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

  useMagnetic(btnRef, noMotion);

  /* Entrance timing synced to the curtain, ported 1:1 from the original script */
  useEffect(() => {
    const CURTAIN_MS = noMotion ? 0 : CURTAIN_MS_MOTION;
    const LINE_DELAY = CURTAIN_MS * 0.8;
    const H1_DELAY = CURTAIN_MS * 0.9 + 80;
    const SUB_DELAY = CURTAIN_MS * 0.9 + 260;
    const BTN_DELAY = CURTAIN_MS * 0.9 + 460;

    if (noMotion) {
      [h1Ref.current, subRef.current, btnRef.current].forEach((el) => { if (el) el.style.opacity = '1'; });
      lineRef.current?.classList.add('in');
      return;
    }

    const timers = [
      setTimeout(() => lineRef.current?.classList.add('in'), LINE_DELAY),
      setTimeout(() => {
        if (h1Ref.current) { h1Ref.current.style.animationDelay = '0ms'; h1Ref.current.style.opacity = '1'; }
      }, H1_DELAY),
      setTimeout(() => {
        if (subRef.current) { subRef.current.style.animationDelay = '0ms'; subRef.current.style.opacity = '1'; }
      }, SUB_DELAY),
      setTimeout(() => {
        if (btnRef.current) { btnRef.current.style.animationDelay = '0ms'; btnRef.current.style.opacity = '1'; }
      }, BTN_DELAY),
    ];
    return () => timers.forEach(clearTimeout);
  }, [noMotion]);

  /* Static background canvas (pipes) — ported 1:1 */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function drawCanvas() {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);

      ctx.fillStyle = '#111418';
      ctx.fillRect(0, 0, W, H);

      const pipes = [
        [0, H * 0.28, W * 0.42, H * 0.28, 44],
        [W * 0.38, H * 0.28, W * 0.38, H * 0.72, 44],
        [W * 0.38, H * 0.72, W, H * 0.72, 44],
        [W * 0.62, 0, W * 0.62, H * 0.38, 30],
        [W * 0.62, H * 0.38, W, H * 0.38, 30],
        [W * 0.14, 0, W * 0.14, H * 0.52, 22],
        [W * 0.14, H * 0.52, W * 0.38, H * 0.52, 22],
        [W * 0.72, H * 0.55, W, H * 0.55, 18],
        [0, H * 0.84, W * 0.28, H * 0.84, 34],
        [W * 0.28, H * 0.84, W * 0.28, H, 34],
        [W * 0.78, 0, W * 0.78, H * 0.28, 26],
        [W * 0.78, H * 0.28, W, H * 0.28, 26],
      ];

      pipes.forEach(([x0, y0, x1, y1, d]) => {
        const isH = y0 === y1;
        ctx.fillStyle = 'rgba(255,255,255,.05)';
        ctx.strokeStyle = 'rgba(255,255,255,.03)';
        ctx.lineWidth = 1;
        if (isH) { ctx.fillRect(x0, y0 - d / 2, x1 - x0, d); ctx.strokeRect(x0, y0 - d / 2, x1 - x0, d); }
        else { ctx.fillRect(x0 - d / 2, y0, d, y1 - y0); ctx.strokeRect(x0 - d / 2, y0, d, y1 - y0); }
        [[x0, y0], [x1, y1]].forEach(([fx, fy]) => {
          ctx.beginPath();
          ctx.arc(fx, fy, d / 2 + 7, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,.034)';
          ctx.strokeStyle = 'rgba(255,255,255,.048)';
          ctx.lineWidth = 1.5;
          ctx.fill(); ctx.stroke();
          ctx.beginPath();
          ctx.arc(fx, fy, d / 2 + 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,.045)';
          ctx.fill();
        });
      });

      const glow = ctx.createRadialGradient(W * 0.5, H, 0, W * 0.5, H, W * 0.7);
      glow.addColorStop(0, 'rgba(196,18,48,.07)');
      glow.addColorStop(0.6, 'rgba(120,8,24,.03)');
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      const vig = ctx.createRadialGradient(W / 2, H * 0.5, 0, W / 2, H * 0.5, Math.max(W, H) * 0.65);
      vig.addColorStop(0, 'rgba(14,14,14,.68)');
      vig.addColorStop(1, 'rgba(5,5,5,.6)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);
    }

    drawCanvas();
    window.addEventListener('resize', drawCanvas, { passive: true });
    return () => window.removeEventListener('resize', drawCanvas);
  }, []);

  /* Steam particles canvas — ported 1:1 */
  useEffect(() => {
    const steam = steamRef.current;
    if (!steam) return;

    let sW, sH, sDpr, raf;
    const particles = [];

    function resizeSteam() {
      sW = steam.offsetWidth; sH = steam.offsetHeight;
      sDpr = Math.min(window.devicePixelRatio || 1, 2);
      steam.width = sW * sDpr;
      steam.height = sH * sDpr;
    }

    function tickSteam() {
      const ctx = steam.getContext('2d');
      ctx.clearRect(0, 0, steam.width, steam.height);

      if (!noMotion && particles.length < 28 && Math.random() < 0.055) {
        const life = 220 + Math.random() * 200;
        particles.push({
          x: sW * (0.18 + Math.random() * 0.64),
          y: sH * (0.72 + Math.random() * 0.22),
          r: Math.random() * 20 + 10,
          vy: Math.random() * 0.42 + 0.18,
          wobble: Math.random() * Math.PI * 2,
          ws: Math.random() * 0.011 + 0.004,
          life, maxLife: life,
          maxA: Math.random() * 0.052 + 0.018,
        });
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.vy; p.wobble += p.ws;
        p.x += Math.sin(p.wobble) * 0.22;
        if (--p.life <= 0) { particles.splice(i, 1); continue; }

        const t = p.life / p.maxLife;
        const a = t < 0.15 ? (t / 0.15) * p.maxA : t > 0.7 ? ((t - 0.7) / 0.3) * p.maxA : p.maxA;
        const sc = sDpr;
        const g = ctx.createRadialGradient(p.x * sc, p.y * sc, 0, p.x * sc, p.y * sc, p.r * sc);
        g.addColorStop(0, `rgba(210,215,230,${a})`);
        g.addColorStop(1, 'rgba(210,215,230,0)');
        ctx.beginPath();
        ctx.arc(p.x * sc, p.y * sc, p.r * sc, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }
      raf = requestAnimationFrame(tickSteam);
    }

    resizeSteam();
    tickSteam();
    window.addEventListener('resize', resizeSteam, { passive: true });
    return () => {
      window.removeEventListener('resize', resizeSteam);
      cancelAnimationFrame(raf);
    };
  }, [noMotion]);

  return (
    <section className="hero" id="hero">
      <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true"></canvas>
      <canvas id="steam-canvas" ref={steamRef} aria-hidden="true"></canvas>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-content">
        <span className="hero-accent-line" ref={lineRef} aria-hidden="true"></span>
        <h1 ref={h1Ref}>Your Comfort,<br />Our Expertise.</h1>
        <p className="hero-sub" ref={subRef}>
          Heating, cooling, and air flow services<br />
          in Your City and surrounding areas.
        </p>
        <a href="#contact" className="btn btn-red" ref={btnRef}>Schedule a Service</a>
      </div>
    </section>
  );
}
