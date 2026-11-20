"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { useLanguage } from "@/src/components/layout/LanguageContext";
import { techStack, type TechCategory } from "./techStack";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, staggerChildren: 0.055, delayChildren: 0.1 },
  },
};

const technologyVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.36 },
  },
};

function TechCategoryCard({
  category,
  language,
  reduceMotion,
}: {
  category: TechCategory;
  language: "fr" | "en";
  reduceMotion: boolean;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 170, damping: 24, mass: 0.6 });
  const springY = useSpring(rotateY, { stiffness: 170, damping: 24, mass: 0.6 });
  const CategoryIcon = category.icon;

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateX.set(y * -4.5);
    rotateY.set(x * 4.5);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      className={`tech-card tech-card--${category.layout}`}
      aria-labelledby={`tech-title-${category.id}`}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.16 }}
      variants={cardVariants}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1000 }}
      whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.22 } }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <span className="tech-card-light" aria-hidden="true" />
      <header className="tech-card-header">
        <span className="tech-category-icon"><CategoryIcon size={19} aria-hidden="true" /></span>
        <div className="tech-category-heading">
          <span className="tech-category-kicker">{category.number} / {language === "fr" ? "CATÉGORIE" : "CATEGORY"}</span>
          <h3 id={`tech-title-${category.id}`}>{category.title[language]}</h3>
          <p>{category.description[language]}</p>
        </div>
        <span className="tech-card-number" aria-hidden="true">{category.number}</span>
      </header>

      <ul className="tech-items">
        {category.technologies.map(({ name, icon: Icon }) => (
          <motion.li
            className="tech-item"
            key={name}
            variants={reduceMotion ? undefined : technologyVariants}
            whileHover={reduceMotion ? undefined : { scale: 1.045, y: -2 }}
          >
            <Icon className="tech-item-icon" size={18} aria-hidden="true" />
            <span>{name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Skills() {
  const { language } = useLanguage();
  const reduceMotionPreference = useReducedMotion();
  const reduceMotion = reduceMotionPreference ?? false;
  const fr = language === "fr";

  return (
    <section id="competences" className="tech-stack-section" aria-labelledby="tech-stack-title">
      <div className="tech-grid-texture" aria-hidden="true" />
      <div className="tech-particle tech-particle--one" aria-hidden="true" />
      <div className="tech-particle tech-particle--two" aria-hidden="true" />
      <div className="tech-particle tech-particle--three" aria-hidden="true" />

      <div className="tech-stack-content">
        <header className="tech-stack-header">
          <div className="tech-stack-heading">
            <p className="tech-section-label">02 — {fr ? "MES TECHNOLOGIES" : "MY TECHNOLOGIES"}</p>
            <h2 id="tech-stack-title">
              {fr ? <>Les outils derrière<br />mes <span>idées.</span></> : <>The tools behind<br />my <span>ideas.</span></>}
            </h2>
          </div>
          <div className="tech-stack-intro">
            <p>{fr
              ? "Un aperçu des technologies que j’utilise pour créer des expériences numériques modernes, évolutives et efficaces."
              : "A collection of technologies and tools I use to build modern, scalable and efficient digital experiences."}</p>
            <span className="tech-stack-count">04 SYSTEMS <i /> {techStack.reduce((total, category) => total + category.technologies.length, 0)} {fr ? "OUTILS" : "TECHNOLOGIES"}</span>
          </div>
        </header>

        <div className="tech-bento-grid">
          {techStack.map((category) => (
            <TechCategoryCard
              category={category}
              language={language}
              reduceMotion={reduceMotion}
              key={category.id}
            />
          ))}
        </div>
        <div className="tech-section-end" aria-hidden="true"><span /><span>BUILD / SHIP / REFINE</span><span /></div>
      </div>
    </section>
  );
}
