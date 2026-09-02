"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import {
  Braces,
  Code2,
  Cpu,
  Database,
  Monitor,
  Rocket,
  Server,
  Terminal,
} from "lucide-react";

import {
  SiDocker,
  SiDjango,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNextdotjs, 
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

/* =========================================================
   PARTICULES
========================================================= */

function AmbientParticles() {
  const ref = useRef<THREE.Points | null>(null);

  const positions = useMemo(() => {
    const count = 220;
    const array = new Float32Array(count * 3);

    const random = (n: number) => {
      const x = Math.sin(n * 91.73) * 43758.5453;
      return x - Math.floor(x);
    };

    for (let i = 0; i < count; i++) {
      array[i * 3] = (random(i * 1.7) - 0.5) * 14;
      array[i * 3 + 1] = (random(i * 2.3) - 0.5) * 8;
      array[i * 3 + 2] = (random(i * 3.1) - 0.5) * 5;
    }

    return array;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.006;

    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.08) * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#00e6c3"
        size={0.018}
        transparent
        opacity={0.22}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

/* =========================================================
   PETIT ANNEAU
========================================================= */

function OrbitRing() {
  const ref = useRef<THREE.Mesh | null>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.z += delta * 0.018;
    ref.current.rotation.y += delta * 0.01;
  });

  return (
    <mesh
      ref={ref}
      rotation={[Math.PI / 2.7, 0.25, 0]}
    >
      <torusGeometry args={[3.4, 0.004, 8, 180]} />

      <meshBasicMaterial
        color="#00e6c3"
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

/* =========================================================
   SCENE
========================================================= */

function Scene() {
  return (
    <>
      <AmbientParticles />
      <OrbitRing />
    </>
  );
}

/* =========================================================
   LOGOS FLOTTANTS
========================================================= */

const floatingIcons = [
  {
    icon: SiReact,
    label: "React",
    position: "left-[7%] top-[24%]",
    animation: "float-a",
    size: 25,
  },
  {
    icon: SiNextdotjs,
    label: "Next.js",
    position: "right-[8%] top-[23%]",
    animation: "float-b",
    size: 24,
  },
  {
    icon: SiLinux,
    label: "Linux",
    position: "left-[4%] top-[46%]",
    animation: "float-c",
    size: 24,
  },
  {
    icon: SiDocker,
    label: "Docker",
    position: "right-[5%] top-[47%]",
    animation: "float-d",
    size: 23,
  },
  {
    icon: SiPython,
    label: "Python",
    position: "left-[13%] top-[70%]",
    animation: "float-b",
    size: 23,
  },
  {
    icon: SiDjango,
    label: "Django",
    position: "right-[13%] top-[70%]",
    animation: "float-a",
    size: 23,
  },
  {
    icon: SiLaravel,
    label: "Laravel",
    position: "left-[24%] top-[14%]",
    animation: "float-d",
    size: 22,
  },
  {
    icon: SiPhp,
    label: "PHP",
    position: "right-[24%] top-[14%]",
    animation: "float-c",
    size: 21,
  },
  {
    icon: SiGit,
    label: "Git",
    position: "left-[30%] top-[82%]",
    animation: "float-a",
    size: 21,
  },
  {
    icon: SiGithub,
    label: "GitHub",
    position: "right-[30%] top-[82%]",
    animation: "float-b",
    size: 22,
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
    position: "left-[35%] top-[9%]",
    animation: "float-c",
    size: 20,
  },
  {
    icon: SiJavascript,
    label: "JavaScript",
    position: "right-[35%] top-[9%]",
    animation: "float-d",
    size: 20,
  },
  {
    icon: SiMysql,
    label: "MySQL",
    position: "left-[18%] top-[86%]",
    animation: "float-c",
    size: 21,
  },
  {
    icon: SiPostgresql,
    label: "PostgreSQL",
    position: "right-[18%] top-[86%]",
    animation: "float-d",
    size: 21,
  },
  // {
  //   icon: SiOracle,
  //   label: "Oracle",
  //   position: "left-[42%] top-[18%]",
  //   animation: "float-a",
  //   size: 20,
  // },
  {
    icon: SiTailwindcss,
    label: "Tailwind",
    position: "right-[42%] top-[18%]",
    animation: "float-b",
    size: 21,
  },
  {
    icon: VscVscode,
    label: "VS Code",
    position: "left-[8%] top-[34%]",
    animation: "float-d",
    size: 24,
  },
  {
    icon: SiVuedotjs,
    label: "Vue",
    position: "right-[8%] top-[34%]",
    animation: "float-a",
    size: 22,
  },
];

/* =========================================================
   BALISES CODE
========================================================= */

const codeTags = [
  {
    text: "</>",
    position: "left-[19%] top-[31%]",
    animation: "float-a",
  },
  {
    text: "{ }",
    position: "right-[20%] top-[31%]",
    animation: "float-c",
  },
  {
    text: "const",
    position: "left-[8%] top-[57%]",
    animation: "float-b",
  },
  {
    text: "npm run dev",
    position: "right-[6%] top-[56%]",
    animation: "float-d",
  },
  {
    text: "git push",
    position: "left-[27%] top-[68%]",
    animation: "float-c",
  },
  {
    text: "API",
    position: "right-[27%] top-[68%]",
    animation: "float-a",
  },
  {
    text: "01",
    position: "left-[38%] top-[27%]",
    animation: "float-d",
  },
  {
    text: "404",
    position: "right-[38%] top-[27%]",
    animation: "float-b",
  },
];

/* =========================================================
   OBJETS GRAPHIQUES
========================================================= */

function GraphicObjects() {
  return (
    <>
      <div
        className="absolute left-[3%] top-[38%] hidden text-[#00e6c3]/25 md:block"
        style={{
          animation: "float-b 9s ease-in-out infinite",
        }}
      >
        <Terminal size={28} strokeWidth={1} />
      </div>

      <div
        className="absolute right-[3%] top-[38%] hidden text-[#00e6c3]/20 md:block"
        style={{
          animation: "float-d 10s ease-in-out infinite",
        }}
      >
        <Monitor size={30} strokeWidth={1} />
      </div>

      <div
        className="absolute left-[12%] top-[61%] hidden text-[#00e6c3]/20 lg:block"
        style={{
          animation: "float-a 11s ease-in-out infinite",
        }}
      >
        <Database size={27} strokeWidth={1} />
      </div>

      <div
        className="absolute right-[12%] top-[61%] hidden text-[#00e6c3]/20 lg:block"
        style={{
          animation: "float-c 10s ease-in-out infinite",
        }}
      >
        <Server size={27} strokeWidth={1} />
      </div>

      <div
        className="absolute left-[46%] top-[13%] hidden text-[#00e6c3]/15 md:block"
        style={{
          animation: "float-d 12s ease-in-out infinite",
        }}
      >
        <Cpu size={22} strokeWidth={1} />
      </div>

      <div
        className="absolute right-[46%] top-[13%] hidden text-[#00e6c3]/15 md:block"
        style={{
          animation: "float-b 10s ease-in-out infinite",
        }}
      >
        <Code2 size={22} strokeWidth={1} />
      </div>

      {/* Fusée */}
      <div
        className="absolute right-[17%] top-[27%] hidden rotate-[-20deg] text-[#00e6c3]/30 md:block"
        style={{
          animation: "rocket-float 8s ease-in-out infinite",
        }}
      >
        <Rocket size={28} strokeWidth={1} />
      </div>

      {/* Braces */}
      <div
        className="absolute left-[16%] top-[27%] hidden text-[#00e6c3]/20 md:block"
        style={{
          animation: "float-c 9s ease-in-out infinite",
        }}
      >
        <Braces size={25} strokeWidth={1} />
      </div>
    </>
  );
}

/* =========================================================
   BACKGROUND
========================================================= */

export default function DataFlowBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#0B1011]">

      {/* Glow central */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#00e6c3]/[0.035]
          blur-[160px]
        "
      />

      {/* Petit glow supérieur */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[-10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#00e6c3]/[0.025]
          blur-[140px]
        "
      />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* 3D */}

      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 50,
        }}
        dpr={[1, 1.2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene />
      </Canvas>

      {/* =================================================
          ÉLÉMENTS GRAPHIQUES
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Logos */}

        {floatingIcons.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.label}-${index}`}
              className={`
                absolute
                ${item.position}
                hidden
                md:block
                text-[#00e6c3]/25
              `}
              style={{
                animation: `${item.animation} ${
                  8 + (index % 5) * 1.5
                }s ease-in-out infinite`,
                animationDelay: `${index * 0.35}s`,
              }}
            >
              <Icon
                size={item.size}
                strokeWidth={1}
              />
            </div>
          );
        })}

        {/* Tags */}

        {codeTags.map((tag, index) => (
          <div
            key={`${tag.text}-${index}`}
            className={`
              absolute
              ${tag.position}
              hidden
              md:block
              font-mono
              text-[11px]
              tracking-[0.12em]
              text-[#00e6c3]/20
            `}
            style={{
              animation: `${tag.animation} ${
                8 + index * 0.6
              }s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {tag.text}
          </div>
        ))}

        <GraphicObjects />

        {/* Points */}

        <span
          className="absolute left-[25%] top-[25%] h-1 w-1 rounded-full bg-[#00e6c3]/40"
          style={{
            animation: "pulse-dot 5s ease-in-out infinite",
          }}
        />

        <span
          className="absolute right-[25%] top-[26%] h-1 w-1 rounded-full bg-[#00e6c3]/30"
          style={{
            animation: "pulse-dot 6s ease-in-out infinite",
          }}
        />

        <span
          className="absolute left-[30%] top-[70%] h-1 w-1 rounded-full bg-[#00e6c3]/30"
          style={{
            animation: "pulse-dot 5s ease-in-out infinite",
          }}
        />

        <span
          className="absolute right-[30%] top-[70%] h-1 w-1 rounded-full bg-[#00e6c3]/30"
          style={{
            animation: "pulse-dot 7s ease-in-out infinite",
          }}
        />
      </div>

      {/* Vignette */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(5,7,7,0.35)_70%,#050707_100%)]
        "
      />

      {/* Fade bas */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-[#050707]
          to-transparent
        "
      />

      {/* =================================================
          ANIMATIONS
      ================================================= */}

      <style>{`
        @keyframes float-a {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(14px, -18px, 0) rotate(3deg);
          }
        }

        @keyframes float-b {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-16px, 13px, 0);
          }
        }

        @keyframes float-c {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(12px, 14px, 0) rotate(-3deg);
          }
        }

        @keyframes float-d {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-12px, -17px, 0);
          }
        }

        @keyframes rocket-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-20deg);
          }

          50% {
            transform: translate3d(-15px, -22px, 0) rotate(-14deg);
          }
        }

        @keyframes pulse-dot {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1);
          }

          50% {
            opacity: 0.65;
            transform: scale(1.8);
          }
        }
      `}</style>
    </div>
  );
}
