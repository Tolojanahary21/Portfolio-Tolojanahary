 
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("Accueil");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#accueil" },
    { name: "Compétences", href: "#competences" },
    { name: "Projets", href: "#projets" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (name: string) => {
    setActive(name);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/[0.07] bg-[#070a0a]/80 backdrop-blur-xl">

        {/* ================= MAIN NAV ================= */}
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">

          {/* LOGO */}
          <a
            href="#accueil"
            onClick={() => handleClick("Accueil")}
            className="group flex items-center text-lg font-bold tracking-[-0.04em] text-white"
          >
            ATS
            <span className="text-[#00e6c3] transition-all duration-300 group-hover:text-white">
              .
            </span>
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = active === link.name;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleClick(link.name)}
                  className={`relative rounded-lg px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-[#00e6c3] transition-all duration-300 ${
                      isActive ? "w-4" : "w-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* CONTACT */}
          <a
            href="#contact"
            onClick={() => handleClick("Contact")}
            className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-[#00e6c3]/50 hover:text-[#00e6c3] md:flex"
          >
            Me contacter
            <ArrowUpRight size={15} />
          </a>

          {/* MOBILE */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80 transition-colors duration-300 hover:border-[#00e6c3]/40 hover:text-[#00e6c3] md:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`grid transition-all duration-300 md:hidden ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/[0.07] px-4 py-4 sm:px-6">

              <div className="flex flex-col gap-1">
                {links.map((link) => {
                  const isActive = active === link.name;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => handleClick(link.name)}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm transition-colors duration-300 ${
                        isActive
                          ? "bg-white/[0.04] text-white"
                          : "text-white/50 hover:bg-white/[0.03] hover:text-white"
                      }`}
                    >
                      {link.name}

                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00e6c3]" />
                      )}
                    </a>
                  );
                })}
              </div>

              <a
                href="#contact"
                onClick={() => handleClick("Contact")}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-[#00e6c3]/30 px-4 py-3 text-sm font-medium text-[#00e6c3] transition-colors duration-300 hover:bg-[#00e6c3]/10"
              >
                Me contacter
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 
