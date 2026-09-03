 
"use client";

import { useEffect, useRef, useState } from "react";
import {
  SiHtml5,
 
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiThreedotjs,
  SiFlutter,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiPhp,
  SiSpringboot,
  SiLaravel,
  SiFastapi,
  SiDjango,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiSqlalchemy,
  SiGit,
  SiGithub,
 
  SiIntellijidea,
  SiEclipseide,
  SiAndroidstudio,
  SiLinux,
 
  SiUbuntu,
  SiPostman,
  SiSwagger,
 
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaWindows, FaJava } from "react-icons/fa";
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Wrench,
  Network,
} from "lucide-react";

import SkillsBackground from "./SkillsBackground";

/* =========================================================
   STACK
========================================================= */

const categories = [
  {
    title: "Front-end",
    description: "Interfaces web modernes et expériences interactives.",
    color: "#5ee6c9",
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS",
        icon: DiCss3,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#FFFFFF",
      },
      {
        name: "Vue.js",
        icon: SiVuedotjs,
        color: "#4FC08D",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "#7952B3",
      },
      {
        name: "Material UI",
        icon: SiMui,
        color: "#007FFF",
      },
      {
        name: "Three.js",
        icon: SiThreedotjs,
        color: "#FFFFFF",
      },
    ],
  },
  {
    title: "Back-end",
    description: "APIs, services et logique métier.",
    color: "#ffb454",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#ED8B00",
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "#777BB4",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "#FF2D20",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        color: "#009688",
      },
      {
        name: "Django",
        icon: SiDjango,
        color: "#44B78B",
      },
      {
        name: "REST API",
        icon: Network,
        color: "#61DAFB",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "#5A67D8",
      },
    ],
  },

  {
    title: "Bases de données",
    description: "Stockage, manipulation et accès aux données.",
    color: "#7aa2ff",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "SQLAlchemy",
        icon: SiSqlalchemy,
        color: "#D71F00",
      },
      {
        name: "Prisma ORM",
        icon: SiPrisma,
        color: "#5A67D8",
      },
    ],
  },
    {
    title: "Mobile",
    description: "Applications mobiles multiplateformes.",
    color: "#54C5F8",
    skills: [
      {
        name: "React Native",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "#54C5F8",
      },
    ],
  },

  {
    title: "Outils",
    description: "Les outils qui structurent mon workflow.",
    color: "#bb9af7",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
      },
      {
        name: "IntelliJ IDEA",
        icon: SiIntellijidea,
        color: "#FE2857",
      },
      {
        name: "Eclipse",
        icon: SiEclipseide,
        color: "#2C2255",
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
        color: "#3DDC84",
      },
      {
        name: "Linux",
        icon: SiLinux,
        color: "#FCC624",
      },
      {
        name: "Windows",
        icon: FaWindows,
        color: "#0078D4",
      },
      {
        name: "Ubuntu",
        icon: SiUbuntu,
        color: "#E95420",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        name: "Swagger",
        icon: SiSwagger,
        color: "#85EA2D",
      },
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="competences"
      className="relative min-h-screen overflow-hidden px-6 py-24 text-white"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <SkillsBackground isVisible={isVisible} />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-6 flex items-center gap-4">
          <span className="h-[2px] w-10 bg-[#5ee6c9]" />

          <span className="font-[family-name:var(--font-mono)] text-sm font-medium uppercase tracking-[0.35em] text-[#5ee6c9]">
            Compétences
          </span>
        </div>

        <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-bold leading-tight md:text-5xl">
          Les outils avec lesquels{" "}
          <span className="text-[#5ee6c9]">je construis.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/55">
          Une stack construite au fil de mes projets, du développement
          d&apos;interfaces aux APIs, aux applications mobiles et aux données.
        </p>

        {/* =================================================
            CATEGORIES
        ================================================= */}

        <div className="mt-14 grid items-start gap-5 md:grid-cols-2">
           {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group relative self-start overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-white/20 md:p-7 ${
                 isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 100}ms` : "0ms",
              }}
            >
              {/* Glow de catégorie */}

              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                style={{
                  background: cat.color,
                }}
              />

              {/* =================================================
                  CATEGORY HEADER
              ================================================= */}

              <div className="relative flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border"
                    style={{
                      color: cat.color,
                      borderColor: `${cat.color}35`,
                      backgroundColor: `${cat.color}0d`,
                    }}
                  >
                    {cat.title === "Front-end" && (
                      <Code2 size={20} strokeWidth={1.7} />
                    )}

                    {cat.title === "Mobile" && (
                      <Smartphone size={20} strokeWidth={1.7} />
                    )}

                    {cat.title === "Back-end" && (
                      <Server size={20} strokeWidth={1.7} />
                    )}

                    {cat.title === "Bases de données" && (
                      <Database size={20} strokeWidth={1.7} />
                    )}

                    {cat.title === "Outils" && (
                      <Wrench size={20} strokeWidth={1.7} />
                    )}
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                      {cat.title}
                    </h3>

                    <p className="mt-1 text-xs text-white/35">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <span
                  className="font-[family-name:var(--font-mono)] text-xs tracking-widest"
                  style={{
                    color: `${cat.color}99`,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* =================================================
                  SKILLS
              ================================================= */}

              <div className="relative mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {cat.skills.map((skill) => {
                  const SkillIcon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group/skill relative flex min-h-[58px] items-center gap-3 overflow-hidden rounded-xl border bg-white/[0.02] px-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
                      style={{
                        borderColor: `${skill.color}22`,
                      }}
                    >
                      {/* Background de l'outil */}

                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/skill:opacity-[0.07]"
                        style={{
                          background: skill.color,
                        }}
                      />

                      {/* Icône */}

                      <div
                        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{
                          color: skill.color,
                          backgroundColor: `${skill.color}12`,
                        }}
                      >
                        <SkillIcon size={19} />
                      </div>

                      {/* Nom */}

                      <span className="relative truncate font-[family-name:var(--font-mono)] text-[11px] font-medium text-white/60 transition-colors duration-300 group-hover/skill:text-white/90">
                        {skill.name}
                      </span>

                      {/* Petit indicateur */}

                      <span
                        className="relative ml-auto h-1.5 w-1.5 shrink-0 rounded-full opacity-40 transition-all duration-300 group-hover/skill:opacity-100"
                        style={{
                          background: skill.color,
                          boxShadow: `0 0 8px ${skill.color}`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* =================================================
                  FOOTER
              ================================================= */}

              <div className="relative mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Stack
                </span>

                <span
                  className="font-[family-name:var(--font-mono)] text-[10px]"
                  style={{
                    color: `${cat.color}aa`,
                  }}
                >
                  {String(cat.skills.length).padStart(2, "0")} technologies
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
