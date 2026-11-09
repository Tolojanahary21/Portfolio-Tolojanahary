import Hero from "../src/features/hero/Hero";
import Navbar from "@/src/components/layout/Navbar";
import Contact from "@/src/features/contact/Contact";
import Skills from "@/src/features/competences/Skills";
import Projects from "@/src/features/projets/Projects";
import Formations from "@/src/formation/Formations";
import Footer from "@/src/components/layout/Footer";
import About from "@/src/features/about/About";
import { LanguageProvider } from "@/src/components/layout/LanguageContext";
export default function Home() {
  return (
    <LanguageProvider>
      <div className="portfolio-shell">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Formations />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
