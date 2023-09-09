"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Profile from "@/public/assets/profile_pic.png";
import { AiOutlineDownload } from "react-icons/ai";
import Resumee from "../../public/RajKumar_resume.pdf";
const About = () => {
  const AboutDetails = {
    intro: [
      `As an engineering graduate, I am determined to thrive in this highly competitive world and carve a successful path in the IT field. 
    I am passionate about exploring new and innovative technologies, always eager to stay updated with the latest advancements in the industry.
    My innate curiosity drives me to continuously seek knowledge and understand the evolving landscape of technology.`,
    ],
    brief: [
      `I possess a strong
    foundation in several key areas, including BPM tool-Appian, Java,
    JavaScript, React.js, Tailwind CSS, and MySQL. Additionally, I have
    a basic understanding of Next.js, MongoDB, Kubernetes (K8s), and
    networking, which further enhances my skillset. I take pride in my
    ability to convert complex business requirements into innovative
    software solutions. My problem-solving skills, logical approach, and
    organizational abilities enable me to tackle challenges effectively.
    Furthermore, I am a dedicated team player with excellent
    interpersonal and communication skills, making me adept at
    collaborating with colleagues and clients alike.
    I am open to new challenges and opportunities, and I believe that my dedication, technical expertise, and passion for innovation make me an ideal fit for the IT industry`,
    ],
  };
  const variantleft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  const variantright = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };
  const variantTop = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="about"
      className=" bg-[rgb(11,11,11)] w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <motion.div
          variants={variantleft}
          initial="hidden"
          whileInView={"show"}
          transition={{ duration: 1 }}
          className={`col-span-2 `}
        >
          <p className="uppercase text-xl tracking-widest text-sky-700">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-justify text-gray-300">
            {AboutDetails.intro}
          </p>
          <p className="py-2 text-justify text-gray-300">
            {AboutDetails.brief}
          </p>
        </motion.div>

        <motion.div
          variants={variantright}
          initial="hidden"
          whileInView={"show"}
          transition={{ duration: 0.5 }}
          className={`h-[70%] w-[65%] m-auto rounded-xl flex flex-col gap-2 items-center justify-center  hover:scale-105 ease-in duration-300`}
        >
          <Image src={Profile} className="rounded-xl" alt="/" />
          <motion.div
            variants={variantTop}
            initial="hidden"
            whileInView={"show"}
            transition={{ duration: 0.5 }}
            className="rounded-xl p-2 bg-gradient-to-r from-[rgb(176,108,234)] to-[rgb(255,116,95)] hover:translate-y-4 ease-in-out duration-200"
          >
            <a
              href={Resumee}
              target="_blank"
              className="flex gap-1 items-center"
            >
              <AiOutlineDownload />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
