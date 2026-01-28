import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/film">Filmer</NavLink>
        <NavLink to="/shows">Serier</NavLink>
        <NavLink to="/about">Om oss</NavLink>
    </header>
  )
}

export default Navbar
