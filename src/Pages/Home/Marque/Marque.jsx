import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaGitAlt, // added
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiFirebase,
  SiVercel,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillsIcons = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-6xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-6xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-6xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-6xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-6xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-6xl" /> },
  { name: "Vercel", icon: <SiVercel className="text-black text-6xl" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-800 text-6xl" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-500 text-6xl" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 text-6xl" /> },
  { name: "NPM", icon: <FaNpm className="text-red-500 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600 text-5xl" /> },
];

const Marque = () => {
    return (
        <div className="py-12">
  {/* <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">
    My Tech Stack
  </h3> */}
  <Marquee pauseOnHover speed={60} gradient={false}>
    <div className="flex gap-10 items-center">
      {skillsIcons.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-white px-6 py-4 rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          {skill.icon}
          <p className="mt-2 font-semibold text-gray-800">{skill.name}</p>
        </div>
      ))}
    </div>
  </Marquee>
</div>
    );
};

export default Marque;