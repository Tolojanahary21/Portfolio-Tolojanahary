"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { projects } from "@/src/features/data/projects";

export default function Navbar() {
  const { language, setLanguage, theme, toggleTheme } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const fr = language === "fr";
  const projectCount = String(projects.length).padStart(2, "0");
  const links = [
    { label: fr ? "À propos" : "About", count: "", href: "#apropos" },
    { label: fr ? "Projets" : "Work", count: projectCount, href: "#projets" },
    { label: fr ? "Services" : "Services", count: "04", href: "#competences" },
    { label: fr ? "Expérience" : "Experience", count: "", href: "#formations" },
    { label: fr ? "Contact" : "Contact", count: "", href: "#contact" },
  ];
  const controls = <div className="nav-tools">
    <button className="language-toggle" type="button" onClick={() => setLanguage(fr ? "en" : "fr")} aria-label={fr ? "Switch to English" : "Passer en français"}>{fr ? "EN" : "FR"}</button>
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={fr ? (theme === "light" ? "Activer le thème sombre" : "Activer le thème clair") : (theme === "light" ? "Switch to dark mode" : "Switch to light mode")} title={fr ? (theme === "light" ? "Thème sombre" : "Thème clair") : (theme === "light" ? "Dark mode" : "Light mode")}>{theme === "light" ? <Moon size={15} /> : <Sun size={15} />}</button>
  </div>;

  return (
    <header className="site-header">
      <a className="site-brand" href="#accueil" aria-label="Tolojanahary Stephan — accueil">
        <span className="site-brand-mark">TS</span>
        <span className="site-brand-name">Tolojanahary<br /><strong>Stephan</strong></span>
      </a>
      <div className="header-status"><span className="status-dot" />{fr ? "Disponible pour de nouveaux projets" : "Available for new projects"}</div>
      <nav className="site-nav" aria-label={fr ? "Navigation principale" : "Main navigation"}>
        <div className="nav-links">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}{link.count && <small>{link.count}</small>}</a>)}
        </div>
        <div className="nav-actions">
          <a className="nav-contact" href="#contact">{fr ? "Parlons-en" : "Let’s Talk"}<span aria-hidden="true">↗</span></a>
          {controls}
        </div>
        <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? (fr ? "Fermer le menu" : "Close menu") : (fr ? "Ouvrir le menu" : "Open menu")} aria-expanded={menuOpen}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      </nav>
      {menuOpen && <div className="mobile-nav">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}{link.count && <small>{link.count}</small>}<span aria-hidden="true">↗</span></a>)}
        <a href="#contact" className="mobile-contact" onClick={() => setMenuOpen(false)}>{fr ? "Parlons-en" : "Let’s Talk"}<span aria-hidden="true">↗</span></a>
        {controls}
      </div>}
    </header>
  );
}
