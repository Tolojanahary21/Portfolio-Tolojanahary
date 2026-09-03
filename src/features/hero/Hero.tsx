import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SiGithub, SiDiscord, SiGmail,
          SiJavascript,
          SiTypescript,
          SiPython,
          SiOpenjdk,
          SiPostgresql, } from "react-icons/si";
import { IconBrandLinkedin } from "@tabler/icons-react";
import DataFlowBackground from "@/src/components/background/DataFlowBackground";
import { FolderCheck, Code2, MapPin,Database } from "lucide-react";


const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const chips = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    icon: SiPython,
    href: "https://www.python.org/",
  },
  {
    name: "Java",
    icon: SiOpenjdk,
    href: "https://www.java.com/",
  },
  {
    name: "SQL",
    icon: Database,
    href: "https://www.w3schools.com/sql/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    href: "https://www.postgresql.org/",
  },
];

const socials = [
  { icon: SiGithub, href: "https://github.com/Tolojanahary21", label: "GitHub" },
  { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/tolojanahary-stephan-344a77397/", label: "LinkedIn" },
  { icon: SiGmail, href: "mailto:tolojanaharyandriatahiana@gmail.com", label: "Email" },
  { icon: SiDiscord, href: "https://discord.com/channels/@me", label: "Discord" },
];

export default function AccueilHero() {
  return (
    <section
      id="accueil"
      className={`${display.variable} ${mono.variable} relative min-h-screen overflow-hidden font-sans text-[#edf1f4]`}
    >
      <DataFlowBackground />

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-10">
        <span className="font-[family-name:var(--font-display)] text-lg font-semibold">
          tolojanahary<span className="text-[#5ee6c9]">.</span>dev
        </span>
        <div className="hidden items-center gap-9 text-sm text-white/60 md:flex">
          <a href="#accueil" className="hover:text-white">Accueil</a>
          <a href="#projets" className="hover:text-white">Projets</a>
          <a href="#about" className="hover:text-white">À propos</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-white/60 sm:flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5ee6c9] shadow-[0_0_8px_#5ee6c9]" />
          Disponible pour de nouveaux projets
        </div>
      </nav>

      {/* Contenu */}
      <main className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-4 sm:px-10 lg:min-h-[calc(100vh-96px)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        {/* Colonne gauche */}
        <div className="flex gap-5">
          {/* Gouttière de numéros de ligne */}
          <div className="hidden flex-col items-end gap-2 pt-2.5 font-[family-name:var(--font-mono)] text-xs text-[#3d4757] sm:flex">
            {["01", "02", "03", "04", "05", "06"].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>

          <div className="max-w-xl">
            <div className="mb-5 flex flex-wrap items-center gap-2.5 font-[family-name:var(--font-mono)] text-[13px] text-[#ffb454]">
              <span>~/portfolio</span>
              <span className="text-white/50">// étudiant en informatique · fullstack</span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-[2.4rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Tolojanahary</span>
              <span className="mt-1 block text-[#5ee6c9] drop-shadow-[0_0_32px_rgba(94,230,201,0.35)]">
                Stephan
              </span>
            </h1>

            <div className="mt-6 font-[family-name:var(--font-mono)] text-sm text-white/60">
              <span className="text-[#5ee6c9]">{"{"}</span>{" "}
              <span className="text-[#c792ea]">role</span>:{" "}
              <span className="text-[#9ece6a]">&quot;Développeur Fullstack&quot;</span>,{" "}
              <span className="text-[#c792ea]">basé</span>:{" "}
              <span className="text-[#9ece6a]">&quot;Fianarantsoa&quot;</span>{" "}
              <span className="text-[#5ee6c9]">{"}"}</span>
            </div>

            <p className="mt-6 max-w-[52ch] text-[15.5px] leading-relaxed text-white/80">
              Je conçois et développe des applications web et mobiles, de la conception à la réalisation.
              J’accorde une attention particulière à la qualité du code,
              à l’expérience utilisateur et à la création de solutions fiables et adaptées aux besoins réels.

            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {chips.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`En savoir plus sur ${name}`}
                  className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 font-[family-name:var(--font-mono)] text-xs text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5ee6c9]/40 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="text-sm text-[#5ee6c9]" />
                  {name}
                </a>
                ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href="#projets"
                className="rounded-full bg-[#5ee6c9] px-6 py-3 text-[13px] font-medium text-[#06110f] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(94,230,201,0.4)]"
              >
                Voir mes projets
              </a>
              <a
                href="/CV Tolojanahary Stephan.pdf"
                download
                className="rounded-full border border-white/10 px-6 py-3 text-[13px] font-medium transition-all duration-300 hover:border-[#ffb454] hover:text-[#ffb454]"
              >
                Télécharger mon CV
              </a>
            </div>

            <div className="mt-10 flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all duration-300 hover:border-[#5ee6c9] hover:bg-[#5ee6c9] hover:text-[#0a0e14]"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Carte terminal */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#10161f] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#161d29] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-[family-name:var(--font-mono)] text-[11.5px] text-white/50">
              whoami.ts
            </span>
          </div>

          <div className="space-y-0.5 px-5 py-6 font-[family-name:var(--font-mono)] text-[13px] leading-loose text-[#c3ccd6]">
            <div className="text-[#546472]">// À propos</div>
            <div>
              <span className="text-[#c792ea]">const</span>{" "}
              <span className="text-[#7aa2ff]">dev</span> = {"{"}
            </div>
            <div className="pl-4">
              nom: <span className="text-[#9ece6a]">&quot;ANDRIATAHIANA Tolojanahary Stephan&quot;</span>,
            </div>
            <div className="pl-4">
              formation: <span className="text-[#9ece6a]">&quot;Licence Informatique&quot;</span>,
            </div>
            <div className="pl-4">
              stack: [
                <span className="text-[#bcce6a]">&quot;JavaScript&quot;</span>{", "}
                <span className="text-[#bcce6a]">&quot;Python&quot;</span>{", "}
                <span className="text-[#bcce6a]">&quot;SQL&quot;</span>
              ],
            </div>
            <div className="pl-4">
              disponible: <span className="text-[#c792ea]">true</span>,
            </div>
            <div>
              {"};"}
              <span className="ml-0.5 inline-block h-[15px] w-[7px] animate-pulse bg-[#5ee6c9] align-[-2px]" />
            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-white/10">
  {[
    {
      v: "5",
      l: "Projets livrés",
      icon: FolderCheck,
      suffix: "+",
    },
    {
      v: "Web · Mobile",
      l: "Développement",
      icon: Code2,
    },
    {
      v: "Fianarantsoa",
      l: "MG-261",
      icon: MapPin,
    },
  ].map((s) => {
    const Icon = s.icon;

    return (
      <div
        key={s.l}
        className="group border-r border-white/10 px-4 py-4 last:border-r-0"
      >
        <div className="mb-2 flex items-center gap-2">
          <Icon
            size={15}
            strokeWidth={1.8}
            className="text-[#5ee6c9] transition-transform duration-300 group-hover:-translate-y-0.5"
          />

          <span className="text-[10px] uppercase tracking-wider text-white/40">
            {s.l}
          </span>
        </div>

        <b className="block font-[family-name:var(--font-display)] text-xl">
          {s.v}
          {s.suffix && (
            <span className="text-[#5ee6c9]">{s.suffix}</span>
          )}
        </b>
      </div>
    );
  })}
</div>
        </div>
      </main>
    </section>
  );
}