import React from "react";
import Home2 from "../Home2/Home2";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import WhatIDo from "../WhatIDo/WhatIDo";

const Home = () => {
  return (
    <div>
      <div id="home" className="pt-20">
        <Home2 />
      </div>
      <div id="about" className="pt-20 max-w-7xl mx-auto">
        <About />
      </div>
      <div id="skills" className="pt-20 max-w-7xl mx-auto">
        <Skills />
      </div>
      <div id="services" className="pt-20 max-w-7xl mx-auto">
        <WhatIDo />
      </div>
      <div id="contact" className="pt-20 max-w-7xl mx-auto">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
