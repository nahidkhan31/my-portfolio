import React from "react";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Left Side Logo */}
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        {/* Middle Text */}
        <p className="text-center mt-3">
          © {new Date().getFullYear()} | All rights reserved by{" "}
          <span className="underline">Nahid Khan Niloy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
