"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export type Language = "en" | "fr";

type Preferences = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const PreferencesContext = createContext<Preferences>({
  language: "fr",
  setLanguage: () => {},
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
  return saved === "fr" || saved === "en" ? saved : "fr";
};
const serverLanguage = () => "fr" as Language;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getLanguage, serverLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (next: Language) => {
    localStorage.setItem("portfolio-language", next);
    document.documentElement.lang = next;
    window.dispatchEvent(new Event(preferenceEvent));
  };

  return (
    <PreferencesContext.Provider value={{ language, setLanguage }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export const useLanguage = () => useContext(PreferencesContext);
