"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Accueil", href: "#accueil" },
  // { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#competences" },
  { name: "Projets", href: "#projets" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Accueil");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (name: string) => {
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-5 py-5 sm:px-8 lg:px-12">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-3 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-white/15 bg-[#0a0e14]/70 shadow-lg shadow-black/20"
            : "border-white/10 bg-[#0a0e14]/30"
        }`}
      >
        {/* LOGO */}
        <a
          href="#accueil"
          onClick={() => handleNavigation("Accueil")}
          className="group relative z-50 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white"
        >
          tolojanahary
          <span className="text-[#5ee6c9] transition-colors duration-300 group-hover:text-white">
            .dev
          </span>
        </a>

        {/* NAVIGATION DESKTOP */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavigation(link.name)}
              aria-current={active === link.name ? "page" : undefined}
              className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                active === link.name ? "text-white" : "text-white/55 hover:text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#5ee6c9] transition-all duration-300 ${
                  active === link.name ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        {/* BOUTON CONTACT DESKTOP */}
        <a
          href="#contact"
          onClick={() => handleNavigation("Contact")}
          className="hidden rounded-full border border-[#5ee6c9]/40 px-5 py-2 text-sm font-semibold text-[#5ee6c9] transition-all duration-300 hover:border-[#5ee6c9] hover:bg-[#5ee6c9] hover:text-[#0a0e14] md:block"
        >
          Me contacter
        </a>

        {/* BOUTON MENU MOBILE */}
        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* NAVIGATION MOBILE */}
      <div
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e14]/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[400px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavigation(link.name)}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                active === link.name
                  ? "bg-white/5 text-[#5ee6c9]"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
              style={{ transitionDelay: menuOpen ? `${index * 40}ms` : "0ms" }}
            >
              <span>{link.name}</span>
              {active === link.name && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#5ee6c9]" />
              )}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => handleNavigation("Contact")}
            className="mt-2 rounded-xl border border-[#5ee6c9]/40 px-4 py-3 text-center text-sm font-semibold text-[#5ee6c9] transition-all duration-300 hover:bg-[#5ee6c9] hover:text-[#0a0e14]"
          >
            Me contacter
          </a>
        </div>
      </div>
    </header>
  );
}