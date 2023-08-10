import Image from "next/image";
import React from "react";
// import { Skillset } from "@/pages/data/Data";

import Html from "@/public/assets/skills/html.png";
import Css from "@/public/assets/skills/css.png";
import Javascript from "@/public/assets/skills/javascript.png";
import ReactImg from "@/public/assets/skills/react.png";
import Tailwind from "@/public/assets/skills/tailwind.png";
import NextJS from "@/public/assets/skills/nextjs.png";
import Appian from "@/public/assets/skills/appian.png";
import Java from "@/public/assets/skills/java.png";
import Kubernetes from "@/public/assets/skills/kubernetes.png";
import Git from "@/public/assets/skills/git.png";
import Sql from "@/public/assets/skills/Sql.png";
import Mongo from "@/public/assets/skills/Mongo.png"; 

const Skills = () => {
  const Skillset = [
    { id: 1, name: "Appian", imageSource: Appian },
    { id: 2, name: "HTML", imageSource: Html },
    { id: 3, name: "CSS", imageSource: Css },
    { id: 4, name: "Java", imageSource: Java },
    { id: 5, name: "JavaScript", imageSource: Javascript },
    { id: 6, name: "React.js", imageSource: ReactImg },
    { id: 7, name: "Next.js", imageSource: NextJS },
    { id: 8, name: "Tailwind", imageSource: Tailwind },
    { id: 9, name: "Kubernetes", imageSource: Kubernetes },
    { id: 10, name: "Git", imageSource: Git },
    { id: 11, name: "SQL", imageSource: Sql },
    { id: 12, name: "MongoDB", imageSource: Mongo },
  ];
  return (
    <div id="skills" className=" bg-[rgb(11,11,11)] w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-sky-700">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Skillset.map((value, index) => {
            return (
              <div
                key={index}
                className="p-3 bg-[rgba(255,255,255,0.02)] shadow-xl z-100 rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className="grid sm:grid-cols-2 gap-2 h-auto justify-center  items-center">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
