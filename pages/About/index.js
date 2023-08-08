import React from "react";
import Image from "next/image";
import Profile from "@/public/assets/profile_pic.png";
// import AboutDetails  from "@/pages/data/Data";
const About = () => {
  const AboutDetails= {
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
