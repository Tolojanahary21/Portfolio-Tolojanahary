"use client";

import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  return <footer className="site-footer"><div className="page-width flex items-center justify-between gap-4"><span>© {new Date().getFullYear()} Tolojanahary Stephan</span><span>{language === "fr" ? "Conçu avec intention, à Madagascar." : "Designed with intention in Madagascar."}</span></div></footer>;
}
