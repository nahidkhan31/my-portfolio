import React from "react";
import dotsAnimation from "../../../assets/Lottie/Particles Green.json";
// import photo from "../../../assets/Picture/B612_20230516_184156_796.jpg";
import Lottie from "lottie-react";

const About = () => {
  const photo = "https://i.ibb.co.com/7NWsCQ23/PXL-20251206-091517823-RAW-01-MP-COVER-2.png"
  return (
    <div className="mt-20">
      <div className="text-center text-3xl font-semibold text-blue-400 underline">
        <h1>About Me</h1>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-12 py-12">
        {/* Left Side */}
        <div className="relative flex justify-center items-center w-full md:w-1/2 overflow-hidden">
          {/* Lottie Animation - Behind */}
          <div className="absolute z-0">
            <Lottie
              animationData={dotsAnimation}
              loop={true}
              className="w-100 h-100 object-cover"
            />
          </div>

          {/* Profile Image */}
          <div className="relative z-10 rounded-full p-[5px] bg-gradient-to-r from-purple-500 to-blue-500">
            <img
              src={photo} // এখানে তোমার ছবি বসাও
              alt="Your Name"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </div>

          {/* ছোট ট্যাগ */}
          <span className="absolute bottom-0 bg-purple-500 text-white text-sm px-3 py-1 rounded-full z-20 ">
            Developer
          </span>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-700 mb-4">
            Hi, I'm <strong>Nahid Khan Niloy</strong> — a passionate web
            developer with a love for crafting clean, efficient, and
            user-friendly digital experiences. My programming journey began
            several years ago when I first discovered the magic of turning ideas
            into reality through code.
          </p>
          <p className="text-gray-700">
            I enjoy building <em>dynamic websites</em> and{" "}
            <em>web applications</em> that not only look great but also solve
            real-world problems. Whether it’s designing a smooth user interface
            or optimizing backend logic, I thrive in creating seamless
            experiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
