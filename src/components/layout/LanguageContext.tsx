"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "fr" | "en";
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "fr", setLanguage: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-language");
    if (saved === "en" || saved === "fr") {
      setLanguage(saved);
      document.documentElement.lang = saved;
    }
  }, []);
  const changeLanguage = (next: Language) => {
    setLanguage(next);
    localStorage.setItem("portfolio-language", next);
    document.documentElement.lang = next;
  };
  return <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
