import Hero from "../src/features/hero/Hero";
import Navbar from "@/src/components/layout/Navbar";
import Contact from "@/src/features/contact/Contact";
import Skills from "@/src/features/competences/Skills";
import Projects from "@/src/features/projets/Projects";
export default function Home() {
  return (
    <>
    <Hero />
    <Navbar />
    <Skills />
    <Projects />
    <Contact />
    </>
  );
}