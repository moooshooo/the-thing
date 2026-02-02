import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-5 px-30px gap-10">
      <div id="logo" className="px-10">
        <img src="../src/assets/logo.png" />
      </div>
      <nav className="flex gap-15 px-30 text-2xl font-bold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/film">Filmer</NavLink>
        <NavLink to="/shows">Serier</NavLink>
        <NavLink to="/about">Om oss</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
