import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { SunDim, Menu, X, User, Code, SquareUser, Layers3 } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-around items-center h-16 pt-16 text-black dark:text-white relative">
        <div className="text-2xl font-semibold">Portfolio</div>

        <div className="hidden md:flex space-x-4">
          {/* Home NavLink */}
          <NavLink
            to="/"
            className="relative text-center group px-4 py-2 flex items-center space-x-2"
            activeClassName="bg-gray-300 dark:bg-gray-700"
          >
            <BiHomeAlt size={20} />
            <span>Home</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NavLink>

          {/* About NavLink */}
          <NavLink
            to="/about"
            className="relative text-center group px-4 py-2 flex items-center space-x-2"
            activeClassName="bg-gray-300 dark:bg-gray-700"
          >
            <User size={20} />
            <span>About</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NavLink>

          {/* Skill NavLink */}
          <NavLink
            to="/skill"
            className="relative text-center group px-4 py-2 flex items-center space-x-2"
            activeClassName="bg-gray-300 dark:bg-gray-700"
          >
            <Code size={20} />
            <span>Skill</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NavLink>

          {/* Project NavLink */}
          <NavLink
            to="/project"
            className="relative text-center group px-4 py-2 flex items-center space-x-2"
            activeClassName="bg-gray-300 dark:bg-gray-700"
          >
            <Layers3 size={20} />
            <span>Work</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NavLink>

          {/* Contact NavLink */}
          <NavLink
            to="/contact"
            className="relative text-center group px-4 py-2 flex items-center space-x-2"
            activeClassName="bg-gray-300 dark:bg-gray-700"
          >
            <SquareUser size={20} />
            <span>Contact</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NavLink>
        </div>

        <div className="flex md:hidden space-x-4 absolute right-4">
          <button onClick={toggleMenu} className="text-black dark:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <button className="relative text-center group px-4 py-2">
          <SunDim size={32} />
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-700"></span>
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 z-10 right-4 w-48 bg-gray-200 dark:bg-gray-900 text-black dark:text-white flex flex-col items-center space-y-4 py-4 md:hidden rounded-lg shadow-lg">
            {/* Home NavLink */}
            <NavLink
              to="/"
              className="relative text-center group px-4 py-2 flex items-center space-x-2"
              activeClassName="bg-gray-300 dark:bg-gray-700"
              onClick={toggleMenu}
            >
              <BiHomeAlt size={20} />
              <span>Home</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </NavLink>

            {/* About NavLink */}
            <NavLink
              to="/about"
              className="relative text-center group px-4 py-2 flex items-center space-x-2"
              activeClassName="bg-gray-300 dark:bg-gray-700"
              onClick={toggleMenu}
            >
              <User size={20} />
              <span>About</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </NavLink>

            {/* Skill NavLink */}
            <NavLink
              to="/skill"
              className="relative text-center group px-4 py-2 flex items-center space-x-2"
              activeClassName="bg-gray-300 dark:bg-gray-700"
              onClick={toggleMenu}
            >
              <Code size={20} />
              <span>Skill</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </NavLink>

            {/* Project NavLink */}
            <NavLink
              to="/project"
              className="relative text-center group px-4 py-2 flex items-center space-x-2"
              activeClassName="bg-gray-300 dark:bg-gray-700"
              onClick={toggleMenu}
            >
              <Layers3 size={20} />
              <span>Work</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </NavLink>

            {/* Contact NavLink */}
            <NavLink
              to="/contact"
              className="relative text-center group px-4 py-2 flex items-center space-x-2"
              activeClassName="bg-gray-300 dark:bg-gray-700"
              onClick={toggleMenu}
            >
              <SquareUser size={20} />
              <span>Contact</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </NavLink>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
