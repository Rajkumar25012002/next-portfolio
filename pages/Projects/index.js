"use client";
import React from "react";
import ProjectItem from "./ProjectItem";
import Data from "@/pages/data/Data";
import { motion } from "framer-motion";

const Projects = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
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
          What I have Built
        </motion.h2>
        <div className="">
          <div className="">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Data.projectData.map((item, index) => {
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
