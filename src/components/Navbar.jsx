import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex h-[50px] justify-end items-center pr-8 gap-8 text-slate-800">
      <NavLink to="/" className="hover:text-blue-500">
        <div>Home</div>
      </NavLink>

      <NavLink to="/experiences" className="hover:text-blue-500">
        <div>Experiences</div>
      </NavLink>

      <NavLink to="/portfolio" className="hover:text-blue-500">
        <div>Portfolio</div>
      </NavLink>

      <NavLink to="/contact" className="hover:text-blue-500">
        <div>Contact</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
