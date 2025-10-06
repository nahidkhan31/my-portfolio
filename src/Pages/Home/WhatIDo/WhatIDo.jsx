import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaSearch,
  FaProjectDiagram,
  FaPaintBrush,
} from "react-icons/fa";
const iconMap = {
  FaCode: <FaCode className="text-3xl text-sky-500 mb-3" />,
  FaServer: <FaServer className="text-3xl text-sky-500 mb-3" />,
  FaMobileAlt: <FaMobileAlt className="text-3xl text-sky-500 mb-3" />,
  FaSearch: <FaSearch className="text-3xl text-sky-500 mb-3" />,
  FaProjectDiagram: <FaProjectDiagram className="text-3xl text-sky-500 mb-3" />,
  FaPaintBrush: <FaPaintBrush className="text-3xl text-sky-500 mb-3" />,
};
const WhatIDo = () => {
  const [skills, setSkills] = useState([]);
  console.log(skills);

  useEffect(() => {
    fetch("/whatIDo.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);
  return (
    <section className="py-16 bg-base-100">
      <div className="px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-sky-500 mb-10 underline">
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((item) => (
            <div
              key={item.id}
              className="p-6 border-2 border-sky-300 rounded-2xl bg-gradient-to-br from-white to-sky-50 hover:shadow-xl transition duration-300">
              <div className="flex flex-col items-center text-center">
                {iconMap[item.icon]}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
