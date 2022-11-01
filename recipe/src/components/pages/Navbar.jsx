import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col bg-orange-500 p-7 ">
        <h1>Food House </h1>
      </div>

      <div>
        <NavLink to="/" className="texy-green-500" />Home</NavLink>
      </div>
    </>
  );
};

export default Navbar;
