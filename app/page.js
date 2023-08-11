import Image from "next/image";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Background from "@/pages/Background";
import Skills from "@/pages/Skills";
import Main from "@/pages/Main";
import Navigation from "@/pages/Navigation";
export default function Home() {
  return (
    <div className="">
      <Navigation />
      <Main />
      <About />
      <Skills />
      <Background />
      <Projects />
      <Contact />
    </div>
  );
}
