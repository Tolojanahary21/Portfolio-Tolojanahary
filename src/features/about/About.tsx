"use client";

import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useLanguage } from "@/src/components/layout/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const fr = language === "fr";
  return (
    <section id="apropos" className="editorial-section about-section">
      <div className="page-width about-grid">
        <div className="section-intro"><span className="section-kicker">01 / {fr ? "À PROPOS" : "ABOUT"}</span><h2>{fr ? <>Des idées claires.<br /><em>Des solutions utiles.</em></> : <>Clear thinking.<br /><em>Useful solutions.</em></>}</h2></div>
        <div className="about-content">
          <p className="about-lede">
  {fr
    ? "Titulaire d’une Licence professionnelle en développement informatique et actuellement étudiant en Master 1 Informatique à l’ENI, je suis développeur full-stack et transforme des besoins concrets en applications web et outils intelligents."
    : "Holding a Professional Bachelor's Degree in Software Development and currently pursuing a Master's degree in Computer Science at ENI, I’m a full-stack developer turning real needs into web applications and intelligent tools."}
</p>
          <p>{fr ? "Titulaire d’une Licence Professionnelle en Informatique Générale, j’ai conçu des applications pour des projets académiques et réalisé des stages chez SPAT et YouthComputing. J’accorde autant d’importance à la qualité du code qu’à l’utilité du produit." : "With a professional bachelor’s degree in computer science, I’ve built academic applications and completed internships at SPAT and YouthComputing. I care as much about sound engineering as I do about the usefulness of the product."}</p>
          <a className="text-link about-link" href="#contact">{fr ? "En savoir plus sur mon parcours" : "Get to know my approach"}<ArrowUpRight size={16} /></a>
          <div className="about-facts">
            <div><GraduationCap size={19} /><span>{fr ? "FORMATION" : "EDUCATION"}</span><strong>Master 1 · ENI</strong></div>
            <div><BriefcaseBusiness size={19} /><span>{fr ? "DERNIER EXPÉRIENCE" : "LAST EXPERIENCE"}</span><strong>SPAT · Madagascar</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
