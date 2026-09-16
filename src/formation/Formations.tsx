 
"use client";

import { useState,useEffect,useRef } from "react";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Code2,
} from "lucide-react";
import FormationBackground from "./FormationBackground";
type Category = "all" | "academic" | "internship";

type Formation = {
  id: number;
  category: "academic" | "internship";
  title: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  details?: string[];
  technologies?: string[];
};

const formations: Formation[] = [
  {
    id: 1,
    category: "academic",
    title: "Master 1 — Informatique Générale",
    institution: "ENI",
    period: "2026 — En cours",
    status: "En cours",
    description:
      "Poursuite de mes études en Informatique Générale à l'École Nationale d'Informatique.",
    details: [
      "Niveau : Master 1",
      "Parcours : Informatique Générale",
    ],
  },
  {
    id: 2,
    category: "academic",
    title: "Licence Professionnelle — Informatique Générale",
    institution: "ENI",
    period: "2025",
    status: "Terminée",
    description:
      "Formation professionnelle dans le domaine des Sciences de l'Ingénieur, parcours Informatique Générale.",
    details: [
      "Domaine : Sciences de l'Ingénieur",
      "Parcours : Informatique Générale",
    ],
  },
  {
    id: 3,
    category: "internship",
    title: "Développeur Web Full Stack",
    institution: "YouthComputing",
    period: "2024",
    status: "Terminé",
    description:
      "Stage consacré à la conception et à la réalisation de la plateforme web de YouthComputing.",
    technologies: [
      "Laravel",
      "Vue.js",
      "TailwindCSS",
      "MySQL",
    ],
  },
  {
    id: 4,
    category: "internship",
    title: "Développeur Web Full Stack",
    institution: "SPAT",
    period: "2025",
    status: "Terminé",
    description:
      "Stage consacré à la conception et à la réalisation d'une plateforme web de gestion de stage au sein de la SPAT.",
    technologies: [
      "Next.js",
      "Prisma",
      "TailwindCSS",
      "PostgreSQL",
    ],
  },
];

export default function Formations() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const sectionRef = useRef<HTMLElement | null>(null);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
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

  const filteredFormations =
    activeCategory === "all"
      ? formations
      : formations.filter(
          (formation) => formation.category === activeCategory
        );

  const filters = [
    {
      id: "all" as Category,
      label: "Toutes les formations",
    },
    {
      id: "academic" as Category,
      label: "Académiques",
    },
    {
      id: "internship" as Category,
      label: "Stages",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="formations"
      className="relative min-h-screen overflow-hidden py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
  <FormationBackground isVisible={true} />
</div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div
            className={`mb-14 text-center transition-all duration-1000 ${
            isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <GraduationCap size={16} />
            <span>Mon parcours</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Formations &{" "}
            <span className="text-cyan-300">Expériences</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
            Mon parcours académique et mes expériences professionnelles
            à travers différentes formations et stages.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => {
            const isActive = activeCategory === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveCategory(filter.id)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-[0_0_25px_rgba(94,230,201,0.08)]"
                    : "border-white/10 bg-white/[0.02] text-white/50 hover:border-cyan-300/20 hover:bg-cyan-300/5 hover:text-white/80"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300/40 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {filteredFormations.map((formation, index) => {
              const isAcademic = formation.category === "academic";
              const isLeft = index % 2 === 0;

              return (
                <div
                    key={formation.id}
                    className={`relative md:grid md:grid-cols-2 md:gap-12 transition-all duration-700 ${
                        isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{
                        transitionDelay: `${300 + index * 150}ms`,
                    }}
                >
                  {/* Point timeline */}
                  <div className="absolute left-4 top-8 z-10 -translate-x-1/2 md:left-1/2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border bg-[#0a0e14] ${
                        isAcademic
                          ? "border-cyan-300/40 text-cyan-300"
                          : "border-violet-300/40 text-violet-300"
                      }`}
                    >
                      {isAcademic ? (
                        <GraduationCap size={15} />
                      ) : (
                        <Briefcase size={15} />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-10 md:ml-0 ${
                      isLeft ? "md:col-start-1" : "md:col-start-2"
                    }`}
                  >
                    <article
                      className={`group relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.04] ${
                        isLeft ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {/* Top */}
                      <div
                        className={`mb-4 flex flex-wrap items-center gap-3 ${
                          isLeft ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${
                            formation.status === "En cours"
                              ? "border-cyan-300/20 bg-cyan-300/5 text-cyan-300"
                              : "border-white/10 bg-white/[0.03] text-white/50"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              formation.status === "En cours"
                                ? "bg-cyan-300"
                                : "bg-white/30"
                            }`}
                          />
                          {formation.status}
                        </span>

                        <span className="flex items-center gap-1.5 text-xs text-white/40">
                          <Calendar size={13} />
                          {formation.period}
                        </span>
                      </div>

                      {/* Category */}
                      <div
                        className={`mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] ${
                          isAcademic
                            ? "text-cyan-300/60"
                            : "text-violet-300/60"
                        } ${
                          isLeft ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {isAcademic ? "Formation académique" : "Stage"}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200">
                        {formation.title}
                      </h3>

                      {/* Institution */}
                      <div
                        className={`mt-2 flex items-center gap-2 text-sm text-white/60 ${
                          isLeft ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <MapPin size={14} className="text-cyan-300/60" />
                        {formation.institution}
                      </div>

                      {/* Description */}
                      <p className="mt-5 text-sm leading-7 text-white/45">
                        {formation.description}
                      </p>

                      {/* Details */}
                      {formation.details && (
                        <div
                          className={`mt-5 flex flex-wrap gap-2 ${
                            isLeft ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          {formation.details.map((detail) => (
                            <span
                              key={detail}
                              className="rounded-lg border border-white/8 bg-white/[0.025] px-3 py-1.5 text-xs text-white/50"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Technologies */}
                      {formation.technologies && (
                        <div className="mt-6">
                          <div
                            className={`mb-3 flex items-center gap-2 text-xs text-white/40 ${
                              isLeft ? "md:justify-end" : "md:justify-start"
                            }`}
                          >
                            <Code2 size={14} />
                            Technologies
                          </div>

                          <div
                            className={`flex flex-wrap gap-2 ${
                              isLeft ? "md:justify-end" : "md:justify-start"
                            }`}
                          >
                            {formation.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="rounded-md border border-cyan-300/10 bg-cyan-300/5 px-2.5 py-1 text-xs text-cyan-200/70"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Glow */}
                      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-cyan-300/[0.015] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

