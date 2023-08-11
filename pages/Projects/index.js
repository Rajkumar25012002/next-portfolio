"use client";
import React from "react";
import ProjectItem from "./ProjectItem";
// import { projectData } from "../data/Data";
import { motion } from "framer-motion";
import Mesh from "@/public/assets/mesh.jpg";
import Gesture from "@/public/assets/handgesture.jpg";
import Solar from "@/public/assets/light.jpg";
import jobFinder from "@/public/assets/jobfinder.jpg";
import chatApp from "@/public/assets/chatapp.jpg";
import weatherApp from "@/public/assets/weather.jpg";
import mobileStore from "@/public/assets/mobileStore.jpg";
import blogpost from "@/public/assets/blogpost.jpg";

const Projects = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
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
        <motion.p
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 1 }}
          className="text-xl tracking-widest uppercase text-sky-700"
        >
          Projects
        </motion.p>
        <motion.h2
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 1 }}
          className="py-4"
        >
          What I&apos;ve Built
        </motion.h2>
        <div className="">
          <div className="">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="show"
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <ProjectItem
                      key={index}
                      title={item.title}
                      backgroundImg={item.backgroundImg}
                      projectUrl={item.projectUrl}
                      websiteUrl={item.websiteUrl}
                      tech={item.tech}
                    />
                  </motion.div>
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
