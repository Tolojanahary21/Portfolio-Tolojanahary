import DataFlowBackground from "@/src/components/background/DataFlowBackground";
import { SiGithub, SiDiscord, SiLinkerd, SiGmail } from "react-icons/si";
import { IconBrandLinkedin } from '@tabler/icons-react';
import { Mail } from "lucide-react";
export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden"
    >
      <DataFlowBackground />

      <div className="relative z-10 flex min-h-screen items-center  ">
        <div className="ml-20">
          
          {/* Label */}
          <div className="mb-8 flex items-center gap-4">
                <span className="relative h-px w-12 bg-[#00e6c3]/50">
                    <span className="absolute -top-0.5 left-0 h-1.25 w-1.25 rounded-full bg-[#00e6c3] shadow-[0_0_10px_#00e6c3]" />
                </span>

                <span className="text-[20px] font-semibold uppercase tracking-[0.45em] text-[#00e6c3] ">
                    Développeur
                </span>

                <span className="h-1 w-1 rounded-full bg-[#00e6c3] shadow-[0_0_8px_#00e6c3]" />
            </div>
          {/* TITRE */}
          <h1 className="leading-none">
                <span 
                    className="block text-4xl font-light uppercase tracking-[0.32em] text-white md:text-5xl lg:text-6xl opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.1s_forwards]"
                > 
                    Tolojanahary 
                </span> 
                <span 
                    className="mt-4 block text-5xl font-bold uppercase tracking-[0.28em] text-[#00e6c3] drop-shadow-[0_0_18px_rgba(0,230,195,0.7)] md:text-6xl lg:text-7xl opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]"
                >
                    Stephan 
                </span> 
            </h1>

          {/* SLOGAN */}
          <div className="mt-8 flex items-center gap-10 tracking-in-contract-bck-bottom leading-none">
            <span className="text-lg text-[#00e6c3]">&gt;</span>
            <span className="text-xs uppercase tracking-[0.4em] text-[#f0ba3b] leading-none">
              Créer
            </span>
            <span className="text-[#00e6c3]">•</span>
            <span className="text-xs uppercase tracking-[0.4em] text-[#f0ba3b]">
              Concevoir
            </span>
            <span className="text-[#00e6c3]">•</span>
            <span className="text-xs uppercase tracking-[0.4em] text-[#f0ba3b]">
              Innover
            </span>
          </div>

          {/* DESCRIPTION */}
        <p className="tracking-in-contract-bck-bottom leading-none  mt-8 max-w-xl text-base text-white/60 ml-10 ">
            Étudiant en informatique et développeur Fullstack, je m’intéresse à la
            conception et au développement d’applications web, mobiles et desktop.
            <br /><br />
            J’aime transformer des idées en solutions concrètes, en combinant
            développement, créativité et technologies modernes. Curieux et toujours
            en apprentissage, je cherche à construire des applications utiles,
            performantes et adaptées aux besoins de leurs utilisateurs.
        </p>
          {/* BOUTON */}
         <div className="tracking-in-contract-bck-bottom mt-10 flex flex-wrap items-center gap-4">
                <a
                    href="#projects"
                    className="inline-flex items-center gap-4 rounded-full border border-[#d8e1e0] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#00e6c3] hover:text-black hover:shadow-[0_0_30px_rgba(0,230,195,0.4)]"
                >
                    Voir mes projets
                    <span>→</span>
                </a>

                <a
                    href="/CV Tolojanahary Stephan.pdf"
                    download
                    className="inline-flex items-center gap-4 rounded-full border border-[#00e6c3]/50 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[#00e6c3] transition-all duration-300 hover:bg-[#00e6c3] hover:text-black hover:shadow-[0_0_30px_rgba(0,230,195,0.4)] hover:scale-105 hover:border-[#00e6c3]">
                    Télécharger mon CV
                    <span>↓</span>
                </a>
            </div>
          

        </div>
      </div>
      {/* Bloc à droite */}
    <div className="absolute right-12 bottom-28 z-10 hidden lg:block">
        <div className="flex items-start gap-5">
    
    {/* Point lumineux */}
    <span className="mt-1 h-3 w-3 rounded-full bg-[#e6efef] shadow-[0_0_15px_#00e6c3] hover:bg-[#451d1d]" />
    <div className="tracking-in-contract-bck-bottom">
      <p className="text-xs font-medium uppercase leading-5 tracking-[0.25em] text-white/60">
        Disponible pour
        <br />
        de nouveaux projets
      </p>

      {/* Bouton */}
        <a
            href="#contact"
            className=" mt-6 inline-flex items-center gap-3 border border-[#00e6c3] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#00e6c3] transition-all duration-300 hover:bg-[#00e6c3] hover:text-black hover:shadow-[0_0_25px_rgba(0,230,195,0.4)]">
                <Mail size={16} strokeWidth={1.8} />
             Me contacter <span className="text-base"></span>
        </a>
        {/* lien  */}
        <div className="mt-6 ml-10 flex items-center gap-4">
            <a href="https://github.com/Tolojanahary21" target="_blank" rel="noopener noreferrer">
                <SiGithub className="text-xl text-white/60 transition-all duration-300 hover:scale-110 hover:text-[#00e6c3]" />
            </a>

            <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
                <SiDiscord className="text-xl text-white/60 transition-all duration-300 hover:scale-110 hover:text-[#00e6c3]" />
            </a>

            <a href="https://www.linkedin.com/in/tolojanahary-stephan-344a77397/" target="_blank" rel="noopener noreferrer">
                <IconBrandLinkedin stroke={2} className="text-xl text-white/60 transition-all duration-300 hover:scale-110 hover:text-[#00e6c3]" />
            </a>

            <a href="mailto:tolojanaharyandriatahiana@gmail.com">
                <SiGmail className="text-xl text-white/60 transition-all duration-300 hover:scale-110 hover:text-[#00e6c3]" />
            </a>
        </div>
    </div>
    
  </div>
</div>
    </section>
  );
}