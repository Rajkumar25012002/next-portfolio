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

import Mesh from "@/public/assets/mesh.jpg";
import Gesture from "@/public/assets/handgesture.jpg";
import Solar from "@/public/assets/light.jpg";
import jobFinder from "@/public/assets/jobfinder.jpg";
import chatApp from "@/public/assets/chatapp.jpg";
import weatherApp from "@/public/assets/weather.jpg";
import mobileStore from "@/public/assets/mobileStore.jpg";
import blogpost from "@/public/assets/blogpost.jpg";

export const AboutDetails = {
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

export const Skillset = [
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

export const projectData = [
  {
    title: "Job Finder",
    backgroundImg: jobFinder,
    websiteUrl: "https://rockysjobfinder.netlify.app/",
    projectUrl: "https://github.com/Rajkumar25012002/jobFinder",
    tech: "HTML,CSS,React,Hooks",
  },
  {
    title: "Chat App",
    backgroundImg: chatApp,
    websiteUrl: "https://rockys-chat-app.netlify.app/",
    projectUrl: "https://github.com/Rajkumar25012002/chat-app",
    tech: "HTML,Styled-components,React,Express JS,MongoDB,Socket.io",
  },
  {
    title: "Blog Post",
    backgroundImg: blogpost,
    websiteUrl: "https://rockys-blog-post.netlify.app/",
    projectUrl: "https://github.com/Rajkumar25012002/blogPostApp",
    tech: "HTML,CSS,React,Redux,JWT,Express JS,Mongodb",
  },
  {
    title: "Weather App",
    backgroundImg: weatherApp,
    websiteUrl: "https://rockysweather.netlify.app/",
    projectUrl: "https://github.com/Rajkumar25012002/weather-app",
    tech: "HTML,Styled-components,React,API",
  },
  {
    title: "Mobile Store",
    backgroundImg: mobileStore,
    websiteUrl: "https://rockymobiles.netlify.app/",
    projectUrl: "https://github.com/Rajkumar25012002/mobileStore",
    tech: "HTML,CSS,React,Express JS,Mongodb",
  },
  {
    title: "A dual discrete predictive based MPPT for PV systems",
    backgroundImg: Solar,
    projectUrl: "/Mpptsolar",
    tech: "Fuzzy logic",
    websiteUrl: "",
  },
  {
    title: "Hand Gesture Controll device",
    backgroundImg: Gesture,
    projectUrl: "/HandGesture",
    websiteUrl: "",
    tech: "Aurdino",
  },
  ,
  {
    title: "Water storage using mesh",
    backgroundImg: Mesh,
    projectUrl: "/Mesh",
    websiteUrl: "",
    tech: "Hardware",
  },
];
