"use client";

import { useEffect, useRef, useState } from "react";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import ProjectsBackground from "./ProjectsBackground";

const projects = [
  {
    title: "Gestion_Salle-de-Classe",
    description:
      "Système de gestion des salles de classe : professeurs, salles et occupations, avec une API REST documentée.",
    stack: ["Spring Boot", "Spring Data JPA", "PostgreSQL", "JSP", "Swagger"],
    github: "https://github.com/Tolojanahary21/Gestion_Salle-de-Classe",
    color: "#5ee6c9",
  },
  {
    title: "MarketPlace",
    description:
      "Plateforme e-commerce — développement du frontend (authentification, dashboard) branché sur un backend NestJS/Prisma.",
    stack: ["React", "Vite", "NestJS", "Prisma"],
    github: "https://github.com/Tolojanahary21/MarketPlace",
    color: "#ffb454",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projets"
      className="relative min-h-screen overflow-hidden px-6 py-24 text-white"
    >
      <ProjectsBackground isVisible={isVisible} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-[2px] w-10 bg-[#5ee6c9]" />
          <span className="font-[family-name:var(--font-mono)] text-sm font-medium uppercase tracking-[0.35em] text-[#5ee6c9]">
            Projets
          </span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold leading-tight md:text-4xl">
            Ce que j&apos;ai <span className="text-[#5ee6c9]">construit.</span>
          </h2>

          <a
            href="https://github.com/Tolojanahary21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-white/60 transition-colors hover:text-[#5ee6c9]"
          >
            <SiGithub className="text-base" />
            Voir tout sur GitHub
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-700 hover:border-white/20 hover:bg-white/[0.05] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[60px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: p.color, opacity: 0.12 }}
              />

              <div className="relative flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: p.color, boxShadow: `0 0 10px ${p.color}` }}
                  />
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                    {p.title}
                  </h3>
                </div>
                <ExternalLink
                  size={16}
                  className="text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/70"
                />
              </div>

              <p className="relative mt-4 text-[15px] leading-7 text-white/60">
                {p.description}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-white/40">
                <SiGithub className="text-sm" />
                github.com/Tolojanahary21/{p.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}