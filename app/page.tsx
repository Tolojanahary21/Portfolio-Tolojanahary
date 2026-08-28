import Hero from "../src/features/hero/Hero";
import Navbar from "@/src/components/layout/Navbar";
import About from "@/src/features/about/About";
export default function Home() {
  return (
    <>
    <Hero />
    <Navbar />
    <About />
    </>
  );
}