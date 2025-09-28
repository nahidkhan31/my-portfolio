import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center space-x-2 group">
        {/* Hexagon Icon */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold  px-4 py-3 text-2xl shadow-md group-hover:scale-105 transition-transform rounded-full">
          NKN
        </div>

        {/* Text Part */}
        <div className="leading-tight">
          <h1 className="text-lg font-extrabold text-blue-600 group-hover:text-blue-700 transition-colors">
            NAHID KHAN
          </h1>
          <h2 className="text-sm md:text-base font-bold text-purple-500 -mt-1.5">
            NILOY
          </h2>
          <p className="text-xs text-gray-500 tracking-widest -mt-.5">
            ( WEB DEVELOPER )
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
