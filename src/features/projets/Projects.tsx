"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/src/features/data/projects";
import { useLanguage } from "@/src/components/layout/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const fr = language === "fr";

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderProjectCards = (items: typeof projects, offset: number) => items.map((project, index) => {
    const number = offset + index + 1;
    return <a key={project.id} className={`project-card ${isVisible ? "is-visible" : ""}`} href={project.github} target="_blank" rel="noopener noreferrer" style={{ transitionDelay: `${index * 90}ms` }}>
      <div className="project-image">
        {project.image ? <Image src={project.image} alt={fr ? `Aperçu de ${project.title}` : `Preview of ${project.titleEn ?? project.title}`} fill sizes="(max-width: 700px) 100vw, 50vw" /> : <div className="project-image-fallback">{project.titleEn ?? project.title}</div>}
        <span className="project-open" aria-hidden="true"><ArrowUpRight size={17} /></span>
      </div>
      <div className="project-card-body">
        <div className="project-card-title"><h3>{fr ? project.title : (project.titleEn ?? project.title)}</h3><span>{String(number).padStart(2, "0")}</span></div>
        <p>{fr ? project.description : (project.descriptionEn ?? project.description)}</p>
        <div className="project-tags">{project.stack.slice(0, 4).map(({ name }) => <span key={name}>{name}</span>)}{project.stack.length > 4 && <span>+{project.stack.length - 4}</span>}</div>
      </div>
    </a>;
  });

  return <section ref={sectionRef} id="projets" className="content-section projects-section">
    <div className="section-heading">
      <p className="section-overline">/ {fr ? "PROJETS SÉLECTIONNÉS" : "SELECTED WORK"}</p>
      <h2>{fr ? <>Une sélection de<br /><span>mes projets.</span></> : <>A selection of<br /><span>my work.</span></>}</h2>
      <p className="section-description">{fr ? "Des projets académiques et personnels, du produit web aux outils intelligents." : "Personal and academic projects, from web products to intelligent tools."}</p>
    </div>
    <div className="project-grid">{renderProjectCards(projects.slice(0, 4), 0)}</div>
    {projects.length > 4 && <div className="more-work">
      <h3 className="more-work-title">/ {fr ? "AUTRES PROJETS" : "MORE WORK"}</h3>
      <div className="project-grid">{renderProjectCards(projects.slice(4), 4)}</div>
    </div>}
    <a className="section-end-link" href="https://github.com/Tolojanahary21" target="_blank" rel="noopener noreferrer">{fr ? "Voir tous mes projets sur GitHub" : "View all projects on GitHub"}<ArrowUpRight size={15} /></a>
  </section>;
}
