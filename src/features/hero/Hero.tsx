"use client";

import DataFlowBackground from "@/src/components/background/DataFlowBackground";
import {
  SiGithub,
  SiDiscord,
  SiGmail,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { Mail, ArrowDown, ArrowRight } from "lucide-react";



export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-[#05090a]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <DataFlowBackground />

      {/* =====================================================
          CONTENU PRINCIPAL
      ====================================================== */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-10 lg:py-20">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

          {/* =================================================
              PARTIE GAUCHE — PRÉSENTATION
          ================================================== */}
          <div className="flex flex-col items-start">

            {/* Label */}
            <div className="mb-7 flex items-center gap-4">
              <span className="relative h-px w-10 bg-[#00e6c3]/50 sm:w-12">
                <span className="absolute -top-[2px] left-0 h-1 w-1 rounded-full bg-[#00e6c3] shadow-[0_0_10px_#00e6c3]" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#00e6c3] sm:text-xs sm:tracking-[0.45em]">
                Développeur Fullstack
              </span>

              <span className="h-1 w-1 rounded-full bg-[#00e6c3] shadow-[0_0_8px_#00e6c3]" />
            </div>

            {/* Petit texte d'introduction */}
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
              Bonjour, je suis
            </p>

            {/* =================================================
                NOM
            ================================================== */}
            <h1 className="leading-[0.9]">
  <span
    className="block text-3xl font-light uppercase tracking-[0.16em] text-white opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.1s_forwards] sm:text-4xl sm:tracking-[0.2em] md:text-3xl lg:text-3xl xl:text-4xl"
  >
    Tolojanahary
  </span>

  <span
    className="mt-2 block text-4xl font-bold uppercase tracking-[0.1em] text-[#00e6c3] drop-shadow-[0_0_16px_rgba(0,230,195,0.4)] opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.35s_forwards] sm:text-5xl sm:tracking-[0.14em] md:text-6xl lg:text-6xl xl:text-7xl"
  >
    Stephan
  </span>
</h1>

            {/* =================================================
                SLOGAN
            ================================================== */}
            <div
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.55s_forwards] sm:gap-x-5
              "
            >
              <span className="text-base text-[#00e6c3]">
                &gt;
              </span>

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#f0ba3b] sm:text-xs sm:tracking-[0.4em]">
                Créer
              </span>

              <span className="text-[#00e6c3]">•</span>

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#f0ba3b] sm:text-xs sm:tracking-[0.4em]">
                Concevoir
              </span>

              <span className="text-[#00e6c3]">•</span>

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#f0ba3b] sm:text-xs sm:tracking-[0.4em]">
                Innover
              </span>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <div
              className="mt-6 max-w-lg border-l border-[#00e6c3]/20 pl-5 opacity-0
                animate-[fadeSlideUp_0.8s_ease-out_0.7s_forwards]
                sm:pl-6
              "
            >
  {/* Présentation */}
  <p className="text-sm leading-7 text-white sm:text-base sm:leading-8">
    Développeur Fullstack passionné, je conçois des applications
    web et mobiles modernes, performantes et utiles.
  </p>

  {/* Technologies */}
  <div className="mt-6 flex flex-wrap items-center gap-2">

    {/* Python */}
    <div
      className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 transition-all duration-300 hover:border-[#00e6c3]/30 hover:bg-[#00e6c3]/5"
    >
    
      <SiPython className="text-[#3776AB] text-base transition-transform duration-300 group-hover:scale-110" />
      <span className="text-[10px] text-white/50 transition-colors group-hover:text-white/80">
        Python
      </span>
    </div>

    {/* JavaScript */}
    <div
      className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 transition-all duration-300 hover:border-[#00e6c3]/30 hover:bg-[#00e6c3]/5"
    >
      <SiJavascript className="text-[#F7DF1E] text-base transition-transform duration-300 group-hover:scale-110" />
      <span className="text-[10px] text-white/50 transition-colors group-hover:text-white/80">
        JavaScript
      </span>
    </div>

    {/* TypeScript */}
    <div
      className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 transition-all duration-300 hover:border-[#00e6c3]/30 hover:bg-[#00e6c3]/5"
    >
      <SiTypescript className="text-[#3178C6] text-base transition-transform duration-300 group-hover:scale-110" />
      <span className="text-[10px] text-white/50 transition-colors group-hover:text-white/80">
        TypeScript
      </span>
    </div>

    {/* PostgreSQL */}
    <div
      className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 transition-all duration-300 hover:border-[#00e6c3]/30 hover:bg-[#00e6c3]/5"
    >
      <SiPostgresql className="text-[#4169E1] text-base transition-transform duration-300 group-hover:scale-110" />
      <span className="text-[10px] text-white/50 transition-colors group-hover:text-white/80">
        PostgreSQL
      </span>
    </div>

  </div>
</div>

            {/* =================================================
                BOUTONS
            ================================================== */}
            <div className=" mt-9 flex w-full flex-col gap-3 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.85s_forwards] sm:w-auto sm:flex-row sm:flex-wrap"
            >
              {/* Projets */}
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.02] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#00e6c3]/60 hover:bg-[#00e6c3] hover:text-black hover:shadow-[0_0_30px_rgba(0,230,195,0.25)]"
              >
                Voir mes projets

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* CV */}
              <a
                href="/CV Tolojanahary Stephan.pdf"
                download
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#00e6c3]/40
                  bg-[#00e6c3]/[0.03] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em]
                  text-[#00e6c3] transition-all duration-300 hover:border-[#00e6c3] hover:bg-[#00e6c3] hover:text-black hover:shadow-[0_0_30px_rgba(0,230,195,0.25)]"
              >
                Télécharger mon CV

                <ArrowDown
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>

            {/* =================================================
                RÉSEAUX SOCIAUX
            ================================================== */}
            <div className=" mt-9 flex items-center gap-5 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_1s_forwards]">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Me retrouver
              </span>

              <span className="h-px w-8 bg-white/10" />

              <a
                href="https://github.com/Tolojanahary21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className=" text-white/40 transition-all duration-300 hover:scale-110 hover:text-[#00e6c3]"
              >
                <SiGithub className="text-lg" />
              </a>

              <a
                href="https://discord.com/channels/@me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className=" text-white/40 transition-all duration-300 hover:scale-110 hover:text-[#00e6c3]"
              >
                <SiDiscord className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/in/tolojanahary-stephan-344a77397/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className=" text-white/40 transition-all duration-300 hover:scale-110 hover:text-[#00e6c3]"
              >
                <IconBrandLinkedin
                  size={20}
                  stroke={1.8}
                />
              </a>

              <a
                href="mailto:tolojanaharyandriatahiana@gmail.com"
                aria-label="Email"
                className=" text-white/40 transition-all duration-300 hover:scale-110 hover:text-[#00e6c3]
                "
              >
                <SiGmail className="text-lg" />
              </a>
            </div>
          </div>

          {/* =================================================
              PARTIE DROITE — PORTRAIT
          ================================================== */}
          <div
            className="relative flex min-h-[420px] items-center justify-center opacity-0 animate-[fadeSlideUp_1s_ease-out_0.5s_forwards] sm:min-h-[500px] lg:min-h-[600px]"
          >

            {/* Glow principal */}
            <div
              className="absolute h-[250px] w-[250px] rounded-full bg-[#00e6c3]/10 blur-[90px] sm:h-[330px] sm:w-[330px] sm:blur-[110px]"
            />

            {/* Halo externe */}
            <div
              className="absolute h-[350px] w-[350px] rounded-full border border-[#00e6c3]/10 sm:h-[450px] sm:w-[450px]"
            />

            {/* Deuxième anneau */}
            <div
              className="absolute h-[315px] w-[315px] rounded-full border border-[#00e6c3]/15 sm:h-[410px] sm:w-[410px]"
            />

            {/* Anneau décoratif */}
            <div
              className="absolute h-[285px] w-[285px] rounded-full border border-dashed border-[#00e6c3]/20 sm:h-[370px] sm:w-[370px]"
            />

            {/* Petits points décoratifs */}
            <span
              className=" absolute right-[12%] top-[17%] h-1.5  w-1.5 rounded-full bg-[#00e6c3] shadow-[0_0_12px_#00e6c3]"
            />

            <span
              className="absolute bottom-[18%] left-[15%] h-1 w-1 rounded-full bg-[#00e6c3] shadow-[0_0_10px_#00e6c3]"
            />

            {/* =================================================
                PORTRAIT
            ================================================== */}
            <div
              className="relative h-[270px] w-[270px] overflow-hidden rounded-full border border-[#00e6c3]/35 bg-[#080e0f] p-2 shadow-[0_0_50px_rgba(0,230,195,0.12)] sm:h-[340px] sm:w-[340px] sm:p-2.5 lg:h-[370px] lg:w-[370px]"
            >
              {/* Bordure interne */}
              <div
                className=" absolute inset-2 z-10 rounded-full border border-white/[0.06] pointer-events-none"
              />

              <img
                src="/Profile.png"
                alt="Portrait de Tolojanahary Stephan"
                className=" h-full w-full rounded-full object-cover object-center"
              />

              {/* Overlay léger */}
              <div
                className=" pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#00e6c3]/10 via-transparent to-transparent"
              />
            </div>

            {/* =================================================
                BADGE — FULLSTACK
            ================================================== */}
            <div
              className="absolute bottom-[8%] right-[2%] rounded-xl border border-[#00e6c3]/25 bg-[#071011]/90 px-4 py-3 shadow-[0_0_25px_rgba(0,230,195,0.08)] backdrop-blur-md sm:right-[4%] sm:px-5 sm:py-3.5"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full bg-[#00e6c3] shadow-[0_0_10px_#00e6c3]"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Spécialité
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#00e6c3] sm:text-xs">
                    Fullstack Developer
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                BADGE — DISPONIBILITÉ
            ================================================== */}
            <div
              className="absolute left-[3%] top-[15%] hidden rounded-xl border border-white/10 bg-[#071011]/85 px-4 py-3 backdrop-blur-md sm:block"
            >
              <div className="flex items-center gap-3">
                <span
                  className="relative flex h-2 w-2"
                >
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e6c3] opacity-50"
                  />

                  <span
                    className=" relative inline-flex h-2 w-2 rounded-full bg-[#00e6c3]"
                  />
                </span>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Statut
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/70">
                    Disponible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          INDICATEUR SCROLL
      ====================================================== */}
      <div
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/25">
          Scroll
        </span>

        <span className="h-8 w-px bg-gradient-to-b from-[#00e6c3]/50 to-transparent" />
      </div>

      {/* =====================================================
          VIGNETTE
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[5]
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(5,9,10,0.35)_100%)]
        "
      />
    </section>
  );
}