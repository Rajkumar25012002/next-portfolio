"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import school from "@/public/assets/school.jpg";
import college from "@/public/assets/college.jpg";
import vuram from "@/public/assets/vuram.jpg";
import { motion } from "framer-motion";
const Background = () => {
  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const educationData = [
    {
      type: "Undergraduate",
      img: college,
      college: "Sri Krishna College of Technology",
      place: "Coimbatore, Tamil Nadu",
      batch: "2023 Passed out",
      course: "B.E Electrical and Electronics Engineering",
      cgpa: "8.55",
      honors: "First Class with Distinction",
    },
    {
      type: "HSLC",
      img: school,
      school: "Ravilla KRA Vidhyashram",
      place: "Kovilpatti, Tamil Nadu",
      batch: "2019 Passed out",
      group: "Bio-Math",
      percentage: "80%",
    },
  ];
  return (
    <div id="background" className="bg-[rgb(11,11,11)] w-full p-2 py-16">
      <div className="max-w-[1240px] m-auto grid md:grid grid-cols-1 gap-2 p-2">
        <motion.p
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 1 }}
          className="text-xl tracking-widest uppercase text-sky-700"
        >
          Education & Experience
        </motion.p>
        <div className="grid grid-cols-1 px-[10%] gap-4 py-8">
          {educationData.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={index % 2 == 0 ? itemVariantsLeft : itemVariantsRight}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 1, delay: index * 0.2 }}
                className=" bg-[rgba(255,255,255,0.02)] rounded-lg overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="flex items-center px-5 justify-start">
                  <Image
                    src={item.img.src}
                    alt={item.type}
                    className="w-full h-60  rounded-xl object-cover"
                  />
                </div>
                <motion.div
                  variants={
                    index % 2 == 0 ? itemVariantsLeft : itemVariantsRight
                  }
                  initial="hidden"
                  whileInView="show"
                  transition={{ duration: 1, delay: 0.5 }}
                  className="px-6 w-full flex flex-col justify-center gap-1 py-4 text-white"
                >
                  <h3 className="text-lg font-semibold">
                    {item.college || item.school}
                  </h3>{" "}
                  <p className="">{item.place}</p>
                  <p className="">{item.type}</p>
                  <p className="">{item.batch}</p>
                  {item.course && <p className="">{item.course}</p>}
                  {item.cgpa && <p className="">CGPA: {item.cgpa}</p>}
                  {item.group && <p className="">{item.group}</p>}
                  {item.percentage && (
                    <p className="">Percentage: {item.percentage}</p>
                  )}
                  {item.honors && <p className="">{item.honors}</p>}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <motion.div className="rounded-lg px-[10%] shadow-md p-6">
          <motion.div
            variants={itemVariantsRight}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-2 justify-center justify-items-start mb-4 bg-[rgba(255,255,255,0.02)] p-1 text-white"
          >
            <h2 className="text-lg font-semibold">WNS Vuram Technologies</h2>
            <p className="text-white-500">Intern</p>
            <motion.div className="mb-4">
              <h3 className="font-semibold">Tech Stack:</h3>
              <p>Appian, Process Model, SQL</p>
            </motion.div>
            <motion.p className="mb-4 text-justify">
              Trained extensively in creating comprehensive business process
              applications, leveraging the Appian tool; streamlined workflows.
            </motion.p>
            <motion.p className="mb-4 text-justify">
              Developed and implemented a Pre-Sale Notice application using the
              Appian tool, aligning with business requirements, where I
              contributed especially on Frontend and programming logic by
              creating user interfaces with approval forms for the business
              internal environment and the flow of operation using process
              model.
            </motion.p>
            <motion.p className="mb-4">Work Experience: 6 months</motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Background;
