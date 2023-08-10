"use client";
import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import particleConfig from "./particles.config.js";
const Main = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleConfig}
      />
      <div id="home" className="w-full select-none h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-200">
              LET U KNOW ABOUT ME
            </p>
            <h1 className="py-4 text-[rgb(240,242,245)]">
              Hi, I&#39;m{" "}
              <span className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[rgb(176,108,234)] to-[rgb(255,116,95)]">
                {" "}
                Raj Kumar
              </span>
            </h1>
            <h1 className="py-2 text-[rgb(240,242,245)]">
              A Frontend Developer
            </h1>
            <p className="py-4 text-gray-300 sm:max-w-[70%] m-auto">
              I &apos; focused on learning tech stacks related to frontend web
              application.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/rajkumar250102"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full bg-sky-800 text-white shadow-sm shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/Rajkumar25012002"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full  bg-sky-800  text-white shadow-sm shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
              <Link href="/Contact">
                <div className="rounded-full  bg-sky-800  text-white shadow-sm shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href="/Resume">
                <div className="rounded-full  bg-sky-800  text-white shadow-sm shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
