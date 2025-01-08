import React from 'react';
import { NavLink } from 'react-router-dom';
import img from './35082661.jpg';

function Navbar() {
  return (
    // <nav className="flex flex-col md:flex-row justify-between items-center p-1 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white">
    <nav className="flex flex-col md:flex-row justify-between items-center p-1 bg-gray-200">
      {/* Logo Section */}
      <NavLink to="/" className="flex items-center mb-4 md:mb-0 ml-20">
        <img
          src={img}
          alt="logo"
          // className="h-10 w-10 rounded-full border-2 border-white mr-3 shadow-md"
          className="h-9 w-9 rounded-full mr-1 shadow-md"
        />
        {/* <p className="text-2xl md:text-3xl font-bold  tracking-wide">Preneurpersuiter</p> */}
        <p className="text-xl md:text-3xl  tracking-wide">Aspirepreneur</p>
      </NavLink>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center md:justify-end gap-6 text-lg md:text-xl font-normal mr-20">
        <NavLink to="/bsuinesscase" className="hover:underline hover:text-yellow-300 transition duration-200">
         BusinessCases
        </NavLink>
        <NavLink to="/" className="hover:underline hover:text-yellow-300 transition duration-200">
          {/* Businessman Speeches */}
          Speeches
        </NavLink>
        <NavLink to="/" className="hover:underline hover:text-yellow-300 transition duration-200">
          Leadership
        </NavLink>
        <NavLink to="/" className="hover:underline hover:text-yellow-300 transition duration-200">
           Management
          {/* Business Management */}
        </NavLink>
        {/* <NavLink to="/" className="hover:underline hover:text-yellow-300 transition duration-200">
          Business Info
        </NavLink> */}
        <NavLink to="/s" className="hover:underline hover:text-yellow-300 transition duration-200">
          Guidance
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
