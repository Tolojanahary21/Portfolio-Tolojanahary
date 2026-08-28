/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/static-components */
 
"use client";

import { useEffect, useRef, useState } from "react";
import AboutBackground from "./AboutBackground";

export default function About() {
//compteur
function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
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

      if (current >= value) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="text-2xl font-semibold text-[#00e6c3]">
      {count}
      {count >= value && suffix}
    </span>
  );
}

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
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
      className="relative min-h-screen overflow-hidden px-6 py-24 text-white"
    >
      <AboutBackground isVisible={isVisible} />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* =========================
              TEXTE
          ========================= */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#00e6c3]" />

              <span className="text-sm font-medium uppercase tracking-[0.35em] text-[#00e6c3]">
                À propos
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Quelques mots
              
              <span className="text-[#00e6c3]"> sur moi.</span>
            </h2>
            {/* DESCRIPTION */}
            <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-8 text-white/65">
            <p>
            Passionné par l'informatique, j'aime comprendre les technologies
            pour concevoir des solutions à la fois{" "}
            <span className="text-white">
                simples, efficaces et bien pensées.
            </span>{" "}
            Étudiant à l'
            <span className="text-white">
                École Nationale d'Informatique (ENI)
            </span>
            , j'y développe mes compétences en conception logicielle,
            développement d'applications et gestion des données à travers
            différents projets académiques et personnels.
            </p> 
            <p>
                Titulaire d'une{" "}
                <span className="text-white">Licence en Informatique</span>
                , j'ai également réalisé mon stage à la{" "}
                <span className="text-white">SPAT</span>, le premier grand port
                de Madagascar. Une expérience qui m'a permis de confronter mes
                connaissances à des{" "}
                <span className="text-white">
                besoins concrets et à des systèmes en production.
                </span>
            </p>
            <p>
                Aujourd'hui, je travaille sur des applications web,mobiles et desktop
                ainsi que sur des API REST, en combinant différentes technologies
                selon les besoins de chaque projet. Je cherche avant tout à
                construire des solutions{" "}
                <span className="text-white">
                utiles, maintenables et pensées pour leurs utilisateurs.
                </span>
            </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
                <div>
                    <p className="text-2xl font-semibold text-[#00e6c3] ml-4">Master 1</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#f0ba3b]">
                        Niveau d'études
                    </p>
                </div>
                <div>
                    <p className="text-2xl font-semibold text-[#00e6c3]">ENI</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#f0ba3b]">
                        École
                    </p>
                </div>
                <div>
                    <p className="ml-10"><Counter value={10} suffix="+" /></p>
                    
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#f0ba3b]">
                        Projets réalisés
                    </p>
                </div>
            </div>
          </div>
          {/* =========================
              IMAGE  */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

                {/* Glow derrière */}
                <div className="absolute inset-[-30px] rounded-full bg-[#00e6c3]/10 blur-[70px]" />

                {/* Anneau extérieur animé */}
                <div className="absolute inset-[-14px] rounded-full border border-[#00e6c3]/20" />

                <div
                className="absolute inset-[-14px] rounded-full border border-transparent border-t-[#00e6c3] border-r-[#00e6c3]/40 animate-[spin_8s_linear_infinite]"
                />

                {/* Petits points décoratifs */}
                <span className="absolute -top-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#00e6c3] shadow-[0_0_15px_#00e6c3]" />

                <span className="absolute top-1/2 -right-2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />

                <span className="absolute bottom-8 -left-2 h-2 w-2 rounded-full bg-[#00e6c3] shadow-[0_0_12px_#00e6c3]" />

                {/* Cercle principal */}
                <div className="relative h-[320px] w-[320px] rounded-full border border-[#00e6c3]/40 bg-[#0a1515] p-3 shadow-[0_0_50px_rgba(0,230,195,0.12)] md:h-[400px] md:w-[400px]">

                {/* Anneau intérieur */}
                <div className="absolute inset-2 rounded-full border border-white/5" />

                {/* Photo */}
                <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10">
                    <img src="/public/profile.png"
                    alt="Tolojanahary Stephan"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                    {/* léger overlay */}
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#00e6c3]/10 via-transparent to-transparent" />
                </div>
                </div>

            </div>
            </div>

        </div>
      </div>
    </section>
  );
}
 
