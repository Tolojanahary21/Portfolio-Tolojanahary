"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import { useLanguage } from "@/src/components/layout/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  const fr = language === "fr";
  const socials = [
    { label: "GitHub", href: "https://github.com/Tolojanahary21", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tolojanahary-stephan-344a77397/", icon: FaLinkedinIn },
    { label: "Email", href: "mailto:tolojanaharyandriatahiana@gmail.com", icon: SiGmail },
  ];

  return <section id="accueil" className="hero-section">
    <div className="hero-name-wrap"><span className="hero-index">PORTFOLIO · 2026</span><h1 className="hero-name"><span>TOLOJANAHARY</span><strong>STEPHAN</strong></h1></div>
    <Image className="hero-portrait" src="/Profile.png" alt="Tolojanahary Stephan" width={420} height={520} priority sizes="(max-width: 700px) 190px, 310px" />
    <div className="hero-intro-row">
      <div className="hero-intro">
        <p className="hero-role">{fr ? "Développeur Full-Stack" : "Full-Stack Developer"}</p>
        <p className="hero-description">{fr ? "Je conçois des applications web, mobiles et des API, de l’idée jusqu’à la mise en œuvre. Je privilégie les solutions utiles, bien structurées et pensées pour leurs utilisateurs." : "I build web and mobile applications and APIs, from first idea to delivery. My focus is on useful products, thoughtful engineering, and experiences made for people."}</p>
        <div className="hero-links">
          <a className="collaborate-link" href="#contact">{fr ? "Parlons de votre projet" : "Let’s work together"}<ArrowUpRight size={15} /></a>
          <a className="resume-link" href="/CV%20Tolojanahary%20Stephan.pdf" download>{fr ? "Télécharger mon CV" : "Download résumé"}<ArrowDown size={13} /></a>
        </div>
      </div>
      <div className="hero-socials">
        {socials.map(({ label, href, icon: Icon }) => <a href={href} key={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><span><Icon /></span>{label}<ArrowUpRight size={12} /></a>)}
      </div>
    </div>
    <a className="hero-scroll" href="#projets"><ArrowDown size={14} />{fr ? "DÉFILER POUR EXPLORER" : "SCROLL TO EXPLORE"}</a>
  </section>;
}
