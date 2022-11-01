import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col bg-orange-500 p-7 ">
        <h1>Food House </h1>
      </div>


        <NavLink to="/" className="text-green-500">
          Home{" "}
        </NavLink>

    </>
  );
};

export default Navbar;
