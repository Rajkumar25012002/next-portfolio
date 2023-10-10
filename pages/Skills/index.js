"use client";
import Image from "next/image";
import React from "react";
import Data from "@/pages/data/Data";
import { motion } from "framer-motion";

const Skills = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div id="skills" className=" bg-[rgb(11,11,11)] w-full lg:h-screen p-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <motion.p
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 1 }}
          className="text-xl tracking-widest uppercase text-sky-700"
        >
          Skills
        </motion.p>
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          animate="show"
          transition={{ duration: 1 }}
          className="py-4"
        >
          What I Can Do
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Data.Skillset.map((value, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 1, delay: index * 0.1 }}
                className="p-3 bg-[rgba(255,255,255,0.02)] shadow-xl z-100 rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className="grid sm:grid-cols-2 gap-1 h-auto justify-center  items-center">
                  <div className="m-auto">
                    <Image
                      src={value.imageSource}
                      alt={value.name}
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{value.name}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
