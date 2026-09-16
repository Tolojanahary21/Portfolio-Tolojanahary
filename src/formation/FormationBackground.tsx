 
"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  cluster: number;
  homeX: number;
  homeY: number;
};

type Cluster = {
  x: number;
  y: number;
  color: string;
};

const CLUSTER_COLORS = [
  "94,230,201",  // cyan
  "122,162,255", // bleu
  "199,146,234", // violet
];

export default function FormationBackground({
  isVisible,
}: {
  isVisible: boolean;
}) {
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
        const angle =
          (i / CLUSTER_COLORS.length) * Math.PI * 2 - Math.PI / 2;

        const rx = w * 0.32;
        const ry = h * 0.25;

        return {
          x: w / 2 + Math.cos(angle) * rx,
          y: h / 2 + Math.sin(angle) * ry,
          color,
        };
      });

      const perCluster = Math.max(
        10,
        Math.min(22, Math.floor((w * h) / 85000))
      );

      nodes = [];

      clusters.forEach((cluster, clusterIndex) => {
        for (let i = 0; i < perCluster; i++) {
          const spread = 80 + Math.random() * 90;
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * spread;

          const x = cluster.x + Math.cos(angle) * distance;
          const y = cluster.y + Math.sin(angle) * distance;

          nodes.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.18,
            vy: (Math.random() - 0.5) * 0.18,
            cluster: clusterIndex,
            homeX: cluster.x,
            homeY: cluster.y,
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

        // Mouvement léger des nœuds autour de leur formation
        for (const node of nodes) {
          const cluster = clusters[node.cluster];

          node.vx += (cluster.x - node.x) * 0.00022;
          node.vy += (cluster.y - node.y) * 0.00022;

          node.vx *= 0.99;
          node.vy *= 0.99;

          node.x += node.vx;
          node.y += node.vy;
        }

        // Connexions entre les nœuds d'une même formation
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];

            if (a.cluster !== b.cluster) continue;

            const distance = Math.hypot(
              a.x - b.x,
              a.y - b.y
            );

            if (distance < 95) {
              const alpha = 0.2 * (1 - distance / 95);

              ctx.strokeStyle = `rgba(${
                CLUSTER_COLORS[a.cluster]
              },${alpha})`;

              ctx.lineWidth = 1;

              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }

        // Connexions entre les différents niveaux de formation
        for (let i = 0; i < clusters.length; i++) {
          for (let j = i + 1; j < clusters.length; j++) {
            ctx.strokeStyle = "rgba(255,255,255,0.035)";
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(clusters[i].x, clusters[i].y);
            ctx.lineTo(clusters[j].x, clusters[j].y);
            ctx.stroke();
          }
        }

        // Nœuds
        for (const node of nodes) {
          ctx.fillStyle = `rgba(${
            CLUSTER_COLORS[node.cluster]
          },0.7)`;

          ctx.beginPath();
          ctx.arc(node.x, node.y, 1.8, 0, Math.PI * 2);
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
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: "#0a0e14" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      {/* Grille académique */}
      <div
        className={`pointer-events-none absolute inset-0
          bg-[linear-gradient(rgba(94,230,201,.045)_1px,transparent_1px),
          linear-gradient(90deg,rgba(94,230,201,.045)_1px,transparent_1px)]
          bg-[size:56px_56px]
          [mask-image:radial-gradient(circle_at_50%_45%,black,transparent_72%)]
          transition-opacity duration-[1800ms]
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0
          bg-[radial-gradient(
            circle_at_center,
            transparent_15%,
            rgba(10,14,20,.5)_65%,
            #0a0e14_100%
          )]"
      />
    </div>
  );
}