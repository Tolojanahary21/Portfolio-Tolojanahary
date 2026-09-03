"use client";

import { useEffect, useRef } from "react";

/* =========================================================
   Même moteur que les autres fonds (canvas 2D, requestAnimationFrame).
   Ici : quelques "cadres" flottants (rappel de fenêtres/écrans de
   projets) qui dérivent lentement, plus un léger nuage de points —
   volontairement plus posé que le réseau du Hero ou les clusters
   des Compétences, pour laisser respirer les cartes de projets.
========================================================= */

type Frame = { x: number; y: number; w: number; h: number; vx: number; vy: number; color: string };
type Dot = { x: number; y: number; vx: number; vy: number };

const COLORS = ["94,230,201", "255,180,84", "122,162,255"];

export default function ProjectsBackground({ isVisible }: { isVisible: boolean }) {
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
    let frames: Frame[] = [];
    let dots: Dot[] = [];
    let frameId: number;
    let opacity = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      frames = Array.from({ length: 5 }, (_, i) => {
        const size = 90 + Math.random() * 110;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          w: size * (1.3 + Math.random() * 0.4),
          h: size,
          vx: (Math.random() - 0.5) * 0.06,
          vy: (Math.random() - 0.5) * 0.06,
          color: COLORS[i % COLORS.length],
        };
      });

      const count = Math.min(60, Math.floor((w * h) / 26000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);

      const target = visibleRef.current ? 1 : 0;
      opacity += (target - opacity) * 0.03;

      if (opacity > 0.01) {
        ctx.globalAlpha = opacity;

        for (const f of frames) {
          f.x += f.vx;
          f.y += f.vy;
          if (f.x < -f.w) f.x = w;
          if (f.x > w) f.x = -f.w;
          if (f.y < -f.h) f.y = h;
          if (f.y > h) f.y = -f.h;

          ctx.strokeStyle = `rgba(${f.color},0.14)`;
          ctx.lineWidth = 1;
          const r = 10;
          ctx.beginPath();
          ctx.roundRect(f.x, f.y, f.w, f.h, r);
          ctx.stroke();
        }

        for (const d of dots) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < 0 || d.x > w) d.vx *= -1;
          if (d.y < 0 || d.y > h) d.vy *= -1;
        }

        for (let i = 0; i < dots.length; i++) {
          for (let j = i + 1; j < dots.length; j++) {
            const a = dots[i];
            const b = dots[j];
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < 110) {
              ctx.strokeStyle = `rgba(94,230,201,${0.08 * (1 - d / 110)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }

        for (const d of dots) {
          ctx.fillStyle = "rgba(94,230,201,0.4)";
          ctx.beginPath();
          ctx.arc(d.x, d.y, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = 1;
      }

      frameId = requestAnimationFrame(step);
    };

    resize();
    step();
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
        className={`pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(94,230,201,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(94,230,201,.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_70%)] transition-opacity duration-[1800ms] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(10,14,20,.5)_65%,#0a0e14_100%)]" />
    </div>
  );
}