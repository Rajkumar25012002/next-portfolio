import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImage from "@/public/assets/contact.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-sky-700">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl bg-[rgba(255,255,255,0.02)] rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImage}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Raj Kumar R</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am excited to contribute my skills to innovative projects
                  and collaborate with teams that share my passion for
                  technology and design. Open to new opportunities, I am eager
                  to bring my expertise to projects that push boundaries and
                  elevate user interactions. Feel free to reach out to me for
                  collaboration or any inquiries, let &apos; s create something
                  amazing together
                </p>
              </div>
              <div>
                <p className="uppercase pt-5">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/rajkumar250102"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full bg-sky-800 text-white shadow-sm shadow-gray-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <div className="rounded-full bg-sky-800 text-white shadow-sm shadow-gray-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/resume">
                    <div className="rounded-full bg-sky-800 text-white shadow-sm shadow-gray-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl bg-[rgba(255,255,255,0.02)]  rounded-xl lg:p-5">
            <div className="p-5">
              <form action="" method="" encType="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="rounded-lg p-2 flex "
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className=" rounded-lg p-2 flex "
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="rounded-lg p-2 flex"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className=" rounded-lg p-2 flex "
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="rounded-lg p-2 "
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <div className="flex flex-col justify-center items-center py-2">
                  <a
                    href=""
                    className="flex items-center justify-center p-3 rounded-full uppercase text-md bg-orange-800 mt-4"
                  >
                    Send Message
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full bg-orange-800 text-white shadow-sm shadow-gray-800 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-white" size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
