"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export type Language = "en" | "fr";
export type Theme = "light" | "dark";

type Preferences = {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<Preferences>({
  language: "en",
  setLanguage: () => {},
  theme: "light",
  toggleTheme: () => {},
});

const preferenceEvent = "portfolio-preferences-change";
const subscribe = (callback: () => void) => {
  window.addEventListener(preferenceEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(preferenceEvent, callback);
    window.removeEventListener("storage", callback);
  };
};
const getLanguage = (): Language => {
  const saved = localStorage.getItem("portfolio-language");
  return saved === "fr" || saved === "en" ? saved : "en";
};
const getTheme = (): Theme => {
  const saved = localStorage.getItem("portfolio-theme");
  return saved === "dark" || saved === "light" ? saved : "light";
};
const serverLanguage = () => "en" as Language;
const serverTheme = () => "light" as Theme;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getLanguage, serverLanguage);
  const theme = useSyncExternalStore(subscribe, getTheme, serverTheme);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
  }, [language, theme]);

  const setLanguage = (next: Language) => {
    localStorage.setItem("portfolio-language", next);
    document.documentElement.lang = next;
    window.dispatchEvent(new Event(preferenceEvent));
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const applyTheme = () => {
      localStorage.setItem("portfolio-theme", next);
      root.dataset.theme = next;
      window.dispatchEvent(new Event(preferenceEvent));
    };

    if (!reducedMotion && "startViewTransition" in document) {
      document.startViewTransition(applyTheme);
    } else {
      applyTheme();
    }
  };

  return (
    <PreferencesContext.Provider value={{ language, setLanguage, theme, toggleTheme }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export const useLanguage = () => useContext(PreferencesContext);
