import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navContainer">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/characters/new">New Characters</NavLink>
    </div>
  );
}

export default Navbar;
