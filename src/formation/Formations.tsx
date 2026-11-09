"use client";

import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/src/components/layout/LanguageContext";

const experience = [
  { type: "academic", title: "Master 1 — Informatique Générale", institution: "ENI · École Nationale d’Informatique", period: "2026 — En cours", description: "Poursuite de mes études en Informatique Générale à l’École Nationale d’Informatique.", tags: ["Computer Science", "Software Engineering"] },
  { type: "internship", title: "Développeur Web Full Stack", institution: "SPAT · Madagascar", period: "2025", description: "Stage consacré à la conception et à la réalisation d’une plateforme web de gestion de stage.", tags: ["Next.js", "Prisma", "Tailwind CSS", "PostgreSQL"], preview: "/projects/gestion-stagiaires.png" },
  { type: "academic", title: "Licence Professionnelle — Informatique Générale", institution: "ENI · École Nationale d’Informatique", period: "2025", description: "Formation professionnelle en Sciences de l’Ingénieur, parcours Informatique Générale.", tags: ["Engineering Sciences", "Computer Science"] },
  { type: "internship", title: "Développeur Web Full Stack", institution: "YouthComputing", period: "2024", description: "Conception et réalisation de la plateforme web de YouthComputing.", tags: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"], preview: "/projects/Youth.png" },
];

const copy: Record<string, string> = {
  "Master 1 — Informatique Générale": "Master's Year 1 — General Computer Science",
  "2026 — En cours": "2026 — Present",
  "Computer Science": "Informatique",
  "Software Engineering": "Ingénierie logicielle",
  "Engineering Sciences": "Sciences de l’ingénieur",
  "Poursuite de mes études en Informatique Générale à l’École Nationale d’Informatique.": "Continuing my studies in General Computer Science at the National School of Informatics.",
  "Licence Professionnelle — Informatique Générale": "Professional Bachelor's — General Computer Science",
  "Formation professionnelle en Sciences de l’Ingénieur, parcours Informatique Générale.": "Professional training in Engineering Sciences, specializing in General Computer Science.",
  "Stage consacré à la conception et à la réalisation d’une plateforme web de gestion de stage.": "Internship focused on designing and building a web platform for managing internships.",
  "Conception et réalisation de la plateforme web de YouthComputing.": "Designed and built the YouthComputing web platform.",
};

export default function Formations() {
  const { language } = useLanguage();
  const fr = language === "fr";
  const translate = (text: string) => fr ? text : (copy[text] ?? text);

  return <section id="formations" className="content-section experience-section">
    <div className="experience-panel">
      <div className="experience-panel-heading">
        <div><p className="section-overline">/ {fr ? "EXPÉRIENCE" : "EXPERIENCE"}</p><h2>{fr ? <>Un parcours<br /><span>en mouvement.</span></> : <>A path of<br /><span>continuous growth.</span></>}</h2></div>
        <p>{fr ? "Études et expériences qui façonnent mon approche du développement." : "Two internships and computer science studies shaping how I build software."}</p>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => <article className="experience-row" key={`${item.institution}-${item.period}`}>
          <span className="experience-index">0{index + 1}</span>
          <div className="experience-detail">
            <div className="experience-meta"><span>{item.type === "academic" ? (fr ? <><GraduationCap size={13} /> Formation</> : <><GraduationCap size={13} /> Education</>) : (fr ? <><BriefcaseBusiness size={13} /> Stage</> : <><BriefcaseBusiness size={13} /> Internship</>)}</span><time>{translate(item.period)}</time></div>
            <h3>{translate(item.title)}</h3><p className="experience-institution">{item.institution}</p><p className="experience-description">{translate(item.description)}</p>
            <div className="experience-tags">{item.tags.map((tag) => <span key={tag}>{translate(tag)}</span>)}</div>
          </div>
          {item.preview && <div className="experience-preview"><Image src={item.preview} alt="" fill sizes="140px" /></div>}
          <ArrowUpRight className="experience-arrow" size={16} aria-hidden="true" />
        </article>)}
      </div>
      <a className="experience-cta" href="#contact">{fr ? "Discutons d’une collaboration" : "Let’s discuss working together"}<ArrowUpRight size={14} /></a>
    </div>
  </section>;
}
