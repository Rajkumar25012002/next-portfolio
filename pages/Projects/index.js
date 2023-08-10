import React from "react";
import ProjectItem from "./ProjectItem";
// import { projectData } from "../data/Data";

import Mesh from "@/public/assets/mesh.jpg";
import Gesture from "@/public/assets/handgesture.jpg";
import Solar from "@/public/assets/light.jpg";
import jobFinder from "@/public/assets/jobfinder.jpg";
import chatApp from "@/public/assets/chatapp.jpg";
import weatherApp from "@/public/assets/weather.jpg";
import mobileStore from "@/public/assets/mobileStore.jpg";
import blogpost from "@/public/assets/blogpost.jpg";

const Projects = () => {
  const projectData = [
    {
      title: "Job Finder",
      backgroundImg: jobFinder,
      websiteUrl: "https://rockysjobfinder.netlify.app/",
      projectUrl: "https://github.com/Rajkumar25012002/jobFinder",
      tech: "HTML,CSS,React,Hooks",
    },
    {
      title: "Chat App",
      backgroundImg: chatApp,
      websiteUrl: "https://rockys-chat-app.netlify.app/",
      projectUrl: "https://github.com/Rajkumar25012002/chat-app",
      tech: "HTML,Styled-components,React,Express JS,MongoDB,Socket.io",
    },
    {
      title: "Blog Post",
      backgroundImg: blogpost,
      websiteUrl: "https://rockys-blog-post.netlify.app/",
      projectUrl: "https://github.com/Rajkumar25012002/blogPostApp",
      tech: "HTML,CSS,React,Redux,JWT,Express JS,Mongodb",
    },
    {
      title: "Weather App",
      backgroundImg: weatherApp,
      websiteUrl: "https://rockysweather.netlify.app/",
      projectUrl: "https://github.com/Rajkumar25012002/weather-app",
      tech: "HTML,Styled-components,React,API",
    },
    {
      title: "Mobile Store",
      backgroundImg: mobileStore,
      websiteUrl: "https://rockymobiles.netlify.app/",
      projectUrl: "https://github.com/Rajkumar25012002/mobileStore",
      tech: "HTML,CSS,React,Express JS,Mongodb",
    },
    {
      title: "A dual discrete predictive based MPPT for PV systems",
      backgroundImg: Solar,
      projectUrl: "/Mpptsolar",
      tech: "Fuzzy logic",
      websiteUrl: "https://rockymobiles.netlify.app/ ",
    },
    {
      title: "Hand Gesture Controll device",
      backgroundImg: Gesture,
      projectUrl: "/HandGesture",
      websiteUrl: "https://rockymobiles.netlify.app/",
      tech: "Aurdino",
    },
    ,
    {
      title: "Water storage using mesh",
      backgroundImg: Mesh,
      projectUrl: "/Mesh",
      websiteUrl: "https://rockymobiles.netlify.app/",
      tech: "Hardware",
    },
  ];

  return (
    <div id="projects" className=" bg-[rgb(11,11,11)] w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-sky-700">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="">
          <div className="">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((item, index) => {
            return (
              <ProjectItem
                key={index}
                title={item.title}
                backgroundImg={item.backgroundImg}
                projectUrl={item.projectUrl}
                websiteUrl={item.websiteUrl}
                tech={item.tech}
              />
            );
          })}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
