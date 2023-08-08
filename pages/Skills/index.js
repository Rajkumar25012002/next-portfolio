import Image from "next/image";
import React from "react";
import { Skillset } from "@/pages/data/Data";
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-sky-700">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Skillset.map((value, index) => {
            return (
              <div
                key={index}
                className="p-3 bg-[rgba(255,255,255,0.02)] shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
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
