import React from "react";
import ProjectItem from "./ProjectItem";
import { projectData } from "../data/Data";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-sky-700">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((item, index) => {
            return <ProjectItem key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
