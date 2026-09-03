/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useRef, useState } from "react";
import AboutBackground from "./AboutBackground";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    let current = 0;
    const duration = 500;
    const stepTime = duration / value;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= value) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, value]);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#5ee6c9]">
      {count}
      {count >= value && suffix}
    </span>
  );
}

const stats = [
  { render: () => "Master 1", label: "Niveau d'études" },
  { render: () => "ENI", label: "École" },
  { render: () => <Counter value={10} suffix="+" />, label: "Projets réalisés" },
];

export default function About() {
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
      id="apropos"
      className="relative min-h-screen overflow-hidden px-6 py-24 text-white"
    >
      <AboutBackground isVisible={isVisible} />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* TEXTE */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#5ee6c9]" />
              <span className="font-[family-name:var(--font-mono)] text-sm font-medium uppercase tracking-[0.35em] text-[#5ee6c9]">
                À propos
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight md:text-4xl">
              Quelques mots <span className="text-[#5ee6c9]">sur moi.</span>
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-8 text-white/65">
              <p>
                Passionné par l&apos;informatique, j&apos;aime comprendre les
                technologies pour concevoir des solutions à la fois{" "}
                <span className="text-white">simples, efficaces et bien pensées.</span>{" "}
                Étudiant à l&apos;
                <span className="text-white">École Nationale d&apos;Informatique (ENI)</span>,
                j&apos;y développe mes compétences en conception logicielle,
                développement d&apos;applications et gestion des données à
                travers différents projets académiques et personnels.
              </p>
              <p>
                Titulaire d&apos;une <span className="text-white">Licence en Informatique</span>,
                j&apos;ai également réalisé mon stage à la{" "}
                <span className="text-white">SPAT</span>, le premier grand port
                de Madagascar. Une expérience qui m&apos;a permis de confronter
                mes connaissances à des{" "}
                <span className="text-white">besoins concrets et à des systèmes en production.</span>
              </p>
              <p>
                Aujourd&apos;hui, je travaille sur des applications web, mobiles
                et desktop ainsi que sur des API REST, en combinant différentes
                technologies selon les besoins de chaque projet. Je cherche
                avant tout à construire des solutions{" "}
                <span className="text-white">utiles, maintenables et pensées pour leurs utilisateurs.</span>
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#5ee6c9]">
                    {s.render()}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#ffb454]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-[-30px] rounded-full bg-[#5ee6c9]/10 blur-[70px]" />
              <div className="absolute inset-[-14px] rounded-full border border-[#5ee6c9]/20" />
              <div className="absolute inset-[-14px] animate-[spin_8s_linear_infinite] rounded-full border border-transparent border-r-[#5ee6c9]/40 border-t-[#5ee6c9]" />

              <span className="absolute -top-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#5ee6c9] shadow-[0_0_15px_#5ee6c9]" />
              <span className="absolute -right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
              <span className="absolute -left-2 bottom-8 h-2 w-2 rounded-full bg-[#5ee6c9] shadow-[0_0_12px_#5ee6c9]" />

              <div className="relative h-[320px] w-[320px] rounded-full border border-[#5ee6c9]/40 bg-[#0a1515] p-3 shadow-[0_0_50px_rgba(94,230,201,0.12)] md:h-[400px] md:w-[400px]">
                <div className="absolute inset-2 rounded-full border border-white/5" />

                <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10">
                  <img
                    src="/profile.png"
                    alt="Tolojanahary Stephan"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#5ee6c9]/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}