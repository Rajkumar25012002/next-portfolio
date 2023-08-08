import React from "react";
import Image from "next/image";
import Profile from "@/public/assets/profile_pic.png";
import { AboutDetails } from "@/pages/data/Data";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-sky-700">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-300">{AboutDetails.intro}</p>
          <p className="py-2 text-gray-300">{AboutDetails.brief}</p>
        </div>
        <div className=" h-[70%] w-[65%] m-auto rounded-xl flex items-center justify-center  hover:scale-105 ease-in duration-300">
          <Image src={Profile} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
