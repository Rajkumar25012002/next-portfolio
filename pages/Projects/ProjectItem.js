import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  websiteUrl,
}) => {
  return (
    <div className=" object-center  w-auto h-full relative flex items-center justify-center object-scale-down  rounded-xl group hover:bg-gradient-to-r from-purple-500 to-transparent">
      <Image
        className="rounded-xl  group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden  group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <div className="grid grid-cols-2 gap-4 h-auto justify-center  items-center">
          <a href={websiteUrl} target="_blank">
            <p className="text-center  py-2 rounded-2xl bg-white text-gray-700 font-bold text-lg cursor-pointer">
              Demo
            </p>
          </a>
          <a href={projectUrl} target="_blank">
            <p className="text-center  py-2 rounded-2xl bg-white text-gray-700 font-bold text-lg cursor-pointer">
              Code
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
