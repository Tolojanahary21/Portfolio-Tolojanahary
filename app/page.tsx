import Hero from "../src/features/hero/Hero";
import Navbar from "@/src/components/layout/Navbar";
import Contact from "@/src/features/contact/Contact";
import Skills from "@/src/features/competences/Skills";
import Projects from "@/src/features/projets/Projects";
import Formations from "@/src/formation/Formations";
import { LanguageProvider } from "@/src/components/layout/LanguageContext";
export default function Home() {
  return (
    <LanguageProvider>
    <Hero />
    <Navbar />
    <Formations />
    <Skills />
    <Projects />
    <Contact />
    </LanguageProvider>
  );
}
