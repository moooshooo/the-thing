import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-5 px-30px gap-10">
      <div id="logo" className="px-10">
        <img src="../src/assets/logo.png" />
      </div>
      <nav className="flex gap-15 px-30 text-2xl cursor-pointer">
        <NavLink to="/" className="hover:underline hover:underline-offset-8">Home</NavLink>
        <NavLink to="/film" className="hover:underline hover:underline-offset-8">Filmer</NavLink>
        <NavLink to="/shows" className="hover:underline hover:underline-offset-8">Serier</NavLink>
        <NavLink to="/about" className="hover:underline hover:underline-offset-8">Om oss</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
