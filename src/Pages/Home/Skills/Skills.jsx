import React, { useState } from "react";
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
import Marque from "../Marque/Marque";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontend = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    },
    { name: "React JS", icon: <FaReact className="text-blue-400 text-5xl" /> },
    {
      name: "React Bootstrap",
      icon: <FaReact className="text-cyan-400 text-5xl" />,
    },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-5xl" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    {
      name: "Express.js",
      icon: <FaNodeJs className="text-gray-700 text-5xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-5xl" />,
    },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-5xl" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-red-600 text-5xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-800 text-5xl" /> },
    { name: "NPM", icon: <FaNpm className="text-red-500 text-5xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-black text-5xl" /> },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500 text-5xl" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500 text-5xl" />,
    },
    { name: "VS Code", icon: <VscVscode className="text-blue-500 text-5xl" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-5xl" /> },
  ];

  const renderSkills = () => {
    let items = [];
    if (activeTab === "frontend") items = frontend;
    if (activeTab === "backend") items = backend;
    if (activeTab === "tools") items = tools;

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {items.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50">
            {skill.icon}
            <p className="mt-3 font-semibold text-lg text-gray-800">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="text-center py-16">
      <h2 className="text-3xl font-bold text-blue-600 underline">Skills</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setActiveTab("frontend")}
          className={`px-5 py-2 rounded-lg font-medium transition ${
            activeTab === "frontend"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}>
          Frontend
        </button>
        <button
          onClick={() => setActiveTab("backend")}
          className={`px-5 py-2 rounded-lg font-medium transition ${
            activeTab === "backend"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}>
          Backend
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`px-5 py-2 rounded-lg font-medium transition ${
            activeTab === "tools"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}>
          Tools
        </button>
      </div>

      {/* Skills content */}
      {renderSkills()}
    </div>
    <Marque/>
    </div>
  );
};

export default Skills;
