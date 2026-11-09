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
          <p className="about-lede">{fr ? "Je suis développeur full-stack et étudiant en informatique à l’ENI. J’aime donner vie à des produits numériques réfléchis, accessibles et construits pour durer." : "I’m a full-stack developer and computer science student at ENI. I enjoy bringing thoughtful, accessible digital products to life and building them to last."}</p>
          <p>{fr ? "Titulaire d’une Licence en Informatique, j’ai réalisé un stage à la SPAT, où j’ai découvert les exigences de systèmes utilisés dans un environnement professionnel réel. Cette expérience nourrit aujourd’hui mon approche : comprendre le besoin, choisir les bons outils, puis soigner l’exécution." : "After earning a bachelor’s degree in computer science, I completed an internship at SPAT, where I saw the demands of software used in a real production environment. It shaped how I work: understand the need, choose the right tools, and take care with the details."}</p>
          <a className="text-link about-link" href="#contact">{fr ? "En savoir plus sur mon parcours" : "Get to know my approach"}<ArrowUpRight size={16} /></a>
          <div className="about-facts">
            <div><GraduationCap size={19} /><span>{fr ? "FORMATION" : "EDUCATION"}</span><strong>Master 1 · ENI</strong></div>
            <div><BriefcaseBusiness size={19} /><span>{fr ? "EXPÉRIENCE" : "EXPERIENCE"}</span><strong>SPAT · Madagascar</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
