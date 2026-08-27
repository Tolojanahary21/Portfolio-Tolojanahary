"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Accueil");

  const links = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Projets", href: "#projets" },
    { name: "Compétences", href: "#competences" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-40 py-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

  {/* Logo */}
  <div className="tracking-in-contract-bck-bottom text-lg font-bold text-white cursor-pointer"><a href="#"></a>
    ATS<span className="text-[#00e6c3]">.</span>
  </div>

  {/* Navigation */}
  <div className="flex items-center gap-8 font-bold">

    <a
      href="#home"
      className="tracking-in-contract-bck-bottom  text-white/70 transition-colors hover:text-[#00e6c3] text-xl "
      style={{ animationDelay: "0.2s" }}
    > 
    <span className="bounce-to-right"> Accueil</span>
      
    </a>

    <a
      href="#about"
      className="tracking-in-contract-bck-bottom text-xl text-white/70 transition-colors hover:text-[#00e6c3]"
      style={{ animationDelay: "0.4s" }}
    > <span className="bounce-to-right"> À propos </span>
      
    </a>

    <a
      href="#skills"
      className="tracking-in-contract-bck-bottom text-xl text-white/70 transition-colors hover:text-[#00e6c3]"
      style={{ animationDelay: "0.6s" }}
    ><span className="bounce-to-right"> Compétences </span>
      
    </a>

    <a
      href="#projects"
      className="tracking-in-contract-bck-bottom text-xl text-white/70 transition-colors hover:text-[#00e6c3]"
      style={{ animationDelay: "0.8s" }}
    ><span className="bounce-to-right" > Projets </span>
      
    </a>

    <a
      href="#contact"
      className="tracking-in-contract-bck-bottom text-xl text-white/70 transition-colors hover:text-[#00e6c3]"
      style={{ animationDelay: "1s" }}
    ><span className="bounce-to-right" > Contact</span>
      
    </a>

  </div>

</nav>
    </header>
  );
}