"use client";

import { useEffect, useRef, useState } from "react";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import ProjectsBackground from "./ProjectsBackground";
import { projects } from "@/src/features/data/projects";

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <span className="h-[2px] w-10 bg-[#5ee6c9]" />

          <span className="font-[family-name:var(--font-mono)] text-sm font-medium uppercase tracking-[0.35em] text-[#5ee6c9]">
            Projets
          </span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold leading-tight md:text-4xl">
            Ce que j&apos;ai{" "}
            <span className="text-[#5ee6c9]">construit.</span>
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

        {/* Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={p.id}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 120}ms` : "0ms",
              }}
            >
              {/* Glow */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[60px] transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: p.color,
                  opacity: 0.12,
                }}
              />

              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden border-b border-white/10">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`Aperçu du projet ${p.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white/[0.03]">
                    <span className="font-[family-name:var(--font-mono)] text-xs text-white/30">
                      Aucun aperçu disponible
                    </span>
                  </div>
                )}

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Header */}
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: p.color,
                        boxShadow: `0 0 10px ${p.color}`,
                      }}
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

                {/* Description */}
                <p className="relative mt-4 text-[15px] leading-7 text-white/60">
                  {p.description}
                </p>

                {/* Technologies */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {p.stack.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 font-[family-name:var(--font-mono)] text-xs text-white/70 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/90"
                      >
                        <Icon className="text-sm" />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>

                {/* GitHub */}
                <div className="relative mt-6 flex items-center gap-2 border-t border-white/10 pt-5 font-[family-name:var(--font-mono)] text-xs text-white/40 transition-colors duration-300 group-hover:text-white/70">
                  <SiGithub className="text-sm" />

                  <span className="truncate">
                    github.com/Tolojanahary21/{p.title}
                  </span>

                  <ExternalLink
                    size={12}
                    className="ml-auto shrink-0"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}