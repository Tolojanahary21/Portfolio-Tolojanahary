"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/src/features/data/projects";
import { useLanguage } from "@/src/components/layout/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const fr = language === "fr";
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  const renderProjectCards = (items: typeof projects, offset: number) =>
    items.map((project, index) => {
      const number = offset + index + 1;
      const title = fr ? project.title : (project.titleEn ?? project.title);
      const githubLabel = project.githubLabel
        ? (fr ? project.githubLabel.fr : project.githubLabel.en)
        : (fr ? "Voir le dépôt" : "View repository");

      return (
        <article className="project-card" key={project.id}>
          <div className="project-image">
            {project.image ? (
              <Image
                src={project.image}
                alt={fr ? `Couverture du projet ${title}` : `${title} project cover`}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            ) : (
              <div className="project-image-fallback" aria-hidden="true">
                <span>{title}</span>
                <small>{fr ? "Projet GitHub" : "GitHub project"}</small>
              </div>
            )}
            <span className="project-image-index">{String(number).padStart(2, "0")}</span>
            <button
              className="project-open"
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-label={`${fr ? "Voir les détails du projet" : "View project details"} — ${title}`}
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="project-card-body">
            <div className="project-card-title">
              <h3>{title}</h3>
              <span>{project.stack[0]?.name}</span>
            </div>
            <p>{fr ? project.description : (project.descriptionEn ?? project.description)}</p>
            <div className="project-card-footer">
              <div className="project-tags">
                {project.stack.map(({ name }) => <span key={name}>{name}</span>)}
              </div>
              <div className="project-card-actions">
                <button className="project-details-link" type="button" onClick={() => setSelectedProject(project)}>
                  <span>{fr ? "Détails" : "Details"}</span><ArrowUpRight size={13} />
                </button>
                <a className="project-repository" href={project.github} target="_blank" rel="noopener noreferrer">
                  <SiGithub size={14} />
                  <span>{githubLabel}</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </article>
      );
    });

  return (
    <section id="projets" className="content-section projects-section">
      <div className="section-heading projects-heading">
        <div>
          <p className="section-overline">/ {fr ? "TRAVAUX SÉLECTIONNÉS" : "SELECTED WORK"}</p>
          <h2>{fr ? <>Des idées<br /><span>devenues produits.</span></> : <>Ideas turned<br /><span>into products.</span></>}</h2>
        </div>
        <div className="projects-heading-aside">
          <p>{fr
            ? "Une sélection de projets qui montre mon approche du développement : comprendre le besoin, concevoir la solution et la construire jusqu’au bout."
            : "A selection of work that reflects how I build: understand the need, shape a solution, and carry it through to delivery."}</p>
          <span>{fr ? `${projects.length} projets · GitHub` : `${projects.length} projects · GitHub`}</span>
        </div>
      </div>

      <div className="project-grid featured-project-grid">
        {renderProjectCards(featuredProjects, 0)}
      </div>

      {otherProjects.length > 0 && (
        <>
          {showMore && (
            <div className="project-grid more-project-grid">
              {renderProjectCards(otherProjects, featuredProjects.length)}
            </div>
          )}
          <button
            className="show-more-projects"
            type="button"
            aria-expanded={showMore}
            onClick={() => setShowMore((value) => !value)}
          >
            <span>{showMore
              ? (fr ? "Voir moins" : "Show less")
              : (fr ? `Voir plus (${otherProjects.length})` : `View more (${otherProjects.length})`)}</span>
            <ArrowDown className={showMore ? "is-rotated" : ""} size={15} />
          </button>
        </>
      )}

      <a className="all-projects-link" href="https://github.com/Tolojanahary21?tab=repositories" target="_blank" rel="noopener noreferrer">
        <span>{fr ? "Explorer tous mes dépôts" : "Explore all my repositories"}</span>
        <ArrowUpRight size={16} />
      </a>

      {selectedProject && (() => {
        const title = fr ? selectedProject.title : (selectedProject.titleEn ?? selectedProject.title);
        const description = fr ? selectedProject.description : (selectedProject.descriptionEn ?? selectedProject.description);
        const githubLabel = selectedProject.githubLabel
          ? (fr ? selectedProject.githubLabel.fr : selectedProject.githubLabel.en)
          : (fr ? "Voir le dépôt GitHub" : "View GitHub repository");

        return (
          <div className="project-dialog-backdrop" onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedProject(null);
          }}>
            <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" tabIndex={-1}>
              <button className="project-dialog-close" type="button" autoFocus onClick={() => setSelectedProject(null)} aria-label={fr ? "Fermer les détails" : "Close project details"}>
                <X size={19} />
              </button>
              {selectedProject.image && (
                <div className="project-dialog-image">
                  <Image src={selectedProject.image} alt={fr ? `Aperçu du projet ${title}` : `${title} preview`} fill sizes="(max-width: 760px) 100vw, 760px" />
                </div>
              )}
              <div className="project-dialog-content">
                <p className="section-overline">{fr ? "DÉTAILS DU PROJET" : "PROJECT DETAILS"}</p>
                <h2 id="project-dialog-title">{title}</h2>
                <p className="project-dialog-description">{description}</p>
                <h3>{fr ? "Technologies utilisées" : "Technologies used"}</h3>
                <div className="project-dialog-stack">
                  {selectedProject.stack.map(({ name, icon: Icon }) => (
                    <span key={name}><Icon aria-hidden="true" /><span>{name}</span></span>
                  ))}
                </div>
                <a className="project-dialog-repository" href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  <SiGithub size={16} />{githubLabel}<ArrowUpRight size={15} />
                </a>
              </div>
            </section>
          </div>
        );
      })()}
    </section>
  );
}
