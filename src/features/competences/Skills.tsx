"use client";

import { useEffect, useRef, useState } from "react";
import SkillsBackground from "./SkillsBackground";

/* =========================================================
   Les 4 catégories reprennent exactement les couleurs de
   cluster de SkillsBackground — front-end/cyan, back-end/
   ambre, data-systèmes/bleu, outils/violet.
========================================================= */

const categories = [
  {
    title: "Front-end",
    color: "#5ee6c9",
    skills: ["React", "Next.js", "Tailwind CSS", "SVG", "TypeScript"],
  },
  {
    title: "Back-end",
    color: "#ffb454",
    skills: ["Node.js", "API REST", "Python", "PHP"],
  },
  {
    title: "Data & systèmes",
    color: "#7aa2ff",
    skills: ["PostGIS", "MapServer", "LeafletJS", "SQL"],
  },
  {
    title: "Outils",
    color: "#bb9af7",
    skills: ["Git / GitHub", "WeasyPrint", "Figma", "Linux"],
  },
];

export default function Skills() {
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
      id="competences"
      className="relative min-h-screen overflow-hidden px-6 py-24 text-white"
    >
      <SkillsBackground isVisible={isVisible} />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Label */}
        <div className="mb-6 flex items-center gap-4">
          <span className="h-[2px] w-10 bg-[#5ee6c9]" />
          <span className="font-[family-name:var(--font-mono)] text-sm font-medium uppercase tracking-[0.35em] text-[#5ee6c9]">
            Compétences
          </span>
        </div>

        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold leading-tight md:text-4xl">
          Les outils avec lesquels{" "}
          <span className="text-[#5ee6c9]">je construis.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/65">
          Une stack qui va de l&apos;interface jusqu&apos;à la donnée
          géospatiale, choisie projet par projet plutôt qu&apos;imposée par
          habitude.
        </p>

        {/* Grille des catégories */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="mb-5 flex items-center gap-2.5">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }}
                />
                <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-[family-name:var(--font-mono)] text-[13px] text-white/70"
                  >
                    <span style={{ color: cat.color }} className="mr-2">
                      ›
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}