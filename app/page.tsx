import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projets from "@/components/Projets";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projets />
      <Contact />
    </main>
  );
}
