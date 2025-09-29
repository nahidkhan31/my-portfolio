import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <Link
          to="home" // section id
          spy={true} // active class observe করবে
          smooth={true} // smooth scroll করবে
          offset={-70} // navbar height adjust
          duration={500} // scroll duration
          activeClass="active-link" // css class যখন active
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active-link">
          About Me
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active-link">
          Skills
        </Link>
      </li>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Home</Link>
      </li>
    </>
  );
  return (
    <div
      className="navbar fixed top-0 left-0 w-full z-50 
    bg-base-100/70 backdrop-blur-md shadow-sm">
      {/* Left side: Logo */}
      <div className="navbar-start">
        <Logo />
      </div>

      {/* Right side (lg+): menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-6 text-sm font-semibold">
          {nav}
        </ul>
      </div>

      {/* Small screen dropdown */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-sm font-semibold">
            {nav}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
