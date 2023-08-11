"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillExperiment, AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? " bg-[rgba(16,15,15,0.8)] fixed w-full h-20 l z-[100] ease-in-out duration-700"
          : "fixed w-full h-20 z-[100] "
      }
    >
      <div className="flex justify-end md:justify-center items-center w-full h-full px-2">
        <div>
          <ul className=" hidden md:flex ">
            <Link href="/">
              <li className="text-sky-700 ml-10 text lg uppercase font-bold  hover:text-white">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li
                className="text-sky-700 ml-10 text sm uppercase font-bold
                 hover:text-white"
              >
                About
              </li>
            </Link>
            <Link href="#skills">
              <li
                className="text-sky-700 ml-10 text sm uppercase font-bold
                hover:text-white"
              >
                Skills
              </li>
            </Link>
            <Link href="#background">
              <li
                className="text-sky-700 ml-10 text sm uppercase font-bold
                hover:text-white"
              >
                Background
              </li>
            </Link>
            <Link href="#projects">
              <li
                className="text-sky-700 ml-10 text sm uppercase font-bold
                hover:text-white"
              >
                Projects
              </li>
            </Link>
            <Link href="#contact">
              <li
                className="text-sky-700 ml-10 text sm uppercase font-bold
                hover:text-white"
              >
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden text-sky-700 hover:text-white"
          >
            <AiOutlineMenu></AiOutlineMenu>
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/90" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-[25%] w-[5%] sm:w-[5%] md:w-[5%] max-h-max-content rounded-xl bg-[rgb(11,11,11)] p-6 ease-in duration-600"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-600"
          }
        >
          <div className="py-2">
            <ul className="uppercase flex flex-col  items-center">
              <Link href="/">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700 "
                >
                  <AiFillHome />
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700 "
                >
                  <BsFillInfoCircleFill />
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700 "
                >
                  <GiSkills />
                </li>
              </Link>
              <Link href="/#background">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700 "
                >
                  <IoSchoolSharp />
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700 "
                >
                  <FaProjectDiagram />
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-3 text-2xl hover:text-purple-700 text-sky-700"
                >
                  <BiSolidContact />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
