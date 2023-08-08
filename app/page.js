import Image from "next/image";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Education from "@/pages/Education";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Main from "@/pages/Main";
import Navigation from "@/pages/Navigation";
export default function Home() {
  return (
    <div>
      <Navigation />
      <Main />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
