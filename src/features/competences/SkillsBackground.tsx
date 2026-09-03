"use client";

import { useEffect, useRef } from "react";

/* =========================================================
   Même moteur canvas que DataFlowBackground, mais les nœuds
   sont répartis en clusters (= domaines de compétence) au
   lieu d'un nuage uniforme. Chaque cluster a sa couleur et
   ses nœuds sont maintenus ensemble par un léger ressort.
========================================================= */

type Cluster = { x: number; y: number; color: string; label: string };

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  cluster: number;
  homeX: number;
  homeY: number;
};

const CLUSTER_COLORS = [
  "94,230,201", // cyan  — front-end
  "255,180,84", // ambre — back-end
  "122,162,255", // bleu — data / systèmes
  "199,146,234", // violet — outils
];

export default function SkillsBackground({ isVisible }: { isVisible: boolean }) {
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
    let nodes: Node[] = [];
    let clusters: Cluster[] = [];
    let frameId: number;
    let opacity = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      clusters = CLUSTER_COLORS.map((color, i) => {
        const angle = (i / CLUSTER_COLORS.length) * Math.PI * 2 + 0.4;
        const rx = w * 0.28;
        const ry = h * 0.28;
        return {
          x: w / 2 + Math.cos(angle) * rx,
          y: h / 2 + Math.sin(angle) * ry,
          color,
          label: "",
        };
      });

      const perCluster = Math.max(8, Math.min(20, Math.floor((w * h) / 90000)));
      nodes = [];
      clusters.forEach((c, ci) => {
        for (let i = 0; i < perCluster; i++) {
          const spread = 90 + Math.random() * 70;
          const a = Math.random() * Math.PI * 2;
          const x = c.x + Math.cos(a) * spread * Math.random();
          const y = c.y + Math.sin(a) * spread * Math.random();
          nodes.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            cluster: ci,
            homeX: c.x,
            homeY: c.y,
          });
        }
      });
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);

      const target = visibleRef.current ? 1 : 0;
      opacity += (target - opacity) * 0.03;

      if (opacity > 0.01) {
        ctx.globalAlpha = opacity;

        // Ressort léger vers le centre du cluster + dérive
        for (const n of nodes) {
          const c = clusters[n.cluster];
          n.vx += (c.x - n.x) * 0.00025;
          n.vy += (c.y - n.y) * 0.00025;
          n.vx *= 0.99;
          n.vy *= 0.99;
          n.x += n.vx;
          n.y += n.vy;
        }

        // Connexions intra-cluster (fortes)
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];
            if (a.cluster !== b.cluster) continue;
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < 90) {
              ctx.strokeStyle = `rgba(${CLUSTER_COLORS[a.cluster]},${0.22 * (1 - d / 90)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }

        // Connexions inter-clusters (faibles, entre centres)
        for (let i = 0; i < clusters.length; i++) {
          for (let j = i + 1; j < clusters.length; j++) {
            ctx.strokeStyle = "rgba(255,255,255,0.04)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(clusters[i].x, clusters[i].y);
            ctx.lineTo(clusters[j].x, clusters[j].y);
            ctx.stroke();
          }
        }

        // Nœuds
        for (const n of nodes) {
          ctx.fillStyle = `rgba(${CLUSTER_COLORS[n.cluster]},0.7)`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
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

      {/* Grille technique */}
      <div
        className={`pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(94,230,201,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(94,230,201,.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_70%)] transition-opacity duration-[1800ms] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(10,14,20,.5)_65%,#0a0e14_100%)]" />
    </div>
  );
}