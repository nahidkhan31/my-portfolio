import React from "react";
import lottie from "../../../assets/Lottie/developer.json";
import Lottie from "lottie-react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router";
const Home2 = () => {
  const text = Typewriter({
    words: [
      "Web Developer",
      "Frontend Developer",
      "React Developer",
      "Junior MERN Developer",
      "Full Stack Web Developer",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          {/* Left Section: Lottie Animation */}
          <div className="relative w-full max-w-lg">
            {/* background gradient behind lottie */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
            <Lottie
              animationData={lottie}
              loop={true}
              className="relative z-10"
            />
          </div>

          {/* Right Section: Name, Typewriter, Resume, Icons */}
          <div className="flex flex-col items-end text-end lg:items-end lg:text-end px-4 lg:px-12">
            <h1 className="text-5xl font-bold text-blue-600">
              Nahid Khan Niloy
            </h1>

            {/* Typewriter */}
            <div className="mt-4 h-10 flex items-center justify-end">
              <p className="text-2xl font-bold text-gray-500">
                {text}
                <Cursor cursorColor="#3B82F6" />
              </p>
            </div>

            {/* Download Resume Button */}
            <div className="mt-6">
              <a
                href="/public/Resume.pdf" // public ফোল্ডারে তোমার PDF
                download="Nahid_Khan_Niloy_Resume.pdf">
                <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500 flex items-center gap-2">
                  <FaDownload className="text-xl" /> {/* 👈 Icon added */}
                  Download Resume
                </button>
              </a>
            </div>

            {/* Description */}
            <div className="text-start">
              <p className="py-6 max-w-xl text-gray-700 justify-center">
                A passionate frontEnd focused full stack web developer. I enjoy
                crafting clean, responsive, and user-friendly web applications
                that bring ideas to life. Constantly learning new tools and
                frameworks, I’m eager to solve real-world problems through code.
                Let’s build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Social Icons with brand colors */}
      <div className="flex justify-center space-x-6 text-2xl mt-5">
        <a href="nahidkhanniloy31@gmail.com">
          <FaEnvelope className="text-red-500 hover:scale-110 transition-transform" />
        </a>
        <Link to="https://www.linkedin.com/in/nahid-khan-niloy-77b1b2261/">
          <FaLinkedin className="text-blue-600 hover:scale-110 transition-transform" />
        </Link>
        <Link to="https://github.com/nahidkhan31">
          <FaGithub className="text-gray-800 hover:scale-110 transition-transform" />
        </Link>
        <Link to="https://web.facebook.com/nahidkhan.niloy.1">
          <FaFacebook className="text-blue-500 hover:scale-110 transition-transform" />
        </Link>
        <Link to="https://www.instagram.com/niloynahidkhan/?hl=en">
          <FaInstagram className="text-red-500 hover:scale-110 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Home2;
