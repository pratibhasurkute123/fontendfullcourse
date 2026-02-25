import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#563d2d]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <h1 className="text-3xl font-bold text-white tracking-wide">
            KOPPEE
          </h1>

          {/* Links */}
          <div className="hidden sm:flex space-x-4">
            <NavLink className="text-white px-3 py-2" to="/">Home</NavLink>
            <NavLink className="text-white px-3 py-2" to="/about">About</NavLink>
            <NavLink className="text-white px-3 py-2" to="/service">Service</NavLink>
            <NavLink className="text-white px-3 py-2" to="/menu">Menu</NavLink>
            <NavLink className="text-white px-3 py-2" to="/contact">Contact</NavLink>
          </div>

          {/* Right */}
          {/* <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="profile"
            className="h-8 w-8 rounded-full"
          /> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
