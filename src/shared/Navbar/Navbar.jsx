import React from "react";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>About Me</NavLink>
      </li>
      <li>
        <NavLink>Skills</NavLink>
      </li>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Home</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left side: Logo */}
      <div className="navbar-start">
        <Logo />
      </div>

      {/* Right side (lg+): menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-6">{nav}</ul>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {nav}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
