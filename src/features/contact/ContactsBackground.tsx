"use client";

import { useEffect, useRef } from "react";

/* =========================================================
   Motif "signal émis" : anneaux qui partent du centre par
   vagues successives, plus un léger nuage de points en fond.
   Plus calme que les autres sections — c'est la dernière
   étape du parcours, pas besoin de surcharger.
========================================================= */

type Ring = { born: number };
type Dot = { x: number; y: number; vx: number; vy: number };

export default function ContactBackground({ isVisible }: { isVisible: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const visibleRef = useRef(isVisible);
  visibleRef.current = isVisible;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dots: Dot[] = [];
    let rings: Ring[] = [];
    let frameId: number;
    let opacity = 0;
    let lastSpawn = 0;
    const RING_PERIOD = 2200;
    const RING_LIFE = 3200;
    const MAX_RADIUS = 420;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      const count = Math.min(50, Math.floor((w * h) / 30000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
      }));
    };

    const step = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      const target = visibleRef.current ? 1 : 0;
      opacity += (target - opacity) * 0.03;

      if (opacity > 0.01) {
        ctx.globalAlpha = opacity;

        if (t - lastSpawn > RING_PERIOD) {
          rings.push({ born: t });
          lastSpawn = t;
        }
        rings = rings.filter((r) => t - r.born < RING_LIFE);

        const cx = w / 2;
        const cy = h * 0.42;

        for (const r of rings) {
          const age = (t - r.born) / RING_LIFE;
          const radius = age * MAX_RADIUS;
          ctx.strokeStyle = `rgba(94,230,201,${0.22 * (1 - age)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.fillStyle = "rgba(94,230,201,0.8)";
        ctx.beginPath();
        ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
        ctx.fill();

        for (const d of dots) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < 0 || d.x > w) d.vx *= -1;
          if (d.y < 0 || d.y > h) d.vy *= -1;

          ctx.fillStyle = "rgba(94,230,201,0.3)";
          ctx.beginPath();
          ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = 1;
      }

      frameId = requestAnimationFrame(step);
    };

    resize();
    frameId = requestAnimationFrame(step);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "#0a0e14" }}>
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div
        className={`pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(94,230,201,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(94,230,201,.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_50%_35%,black,transparent_70%)] transition-opacity duration-[1800ms] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(10,14,20,.5)_65%,#0a0e14_100%)]" />
    </div>
  );
}