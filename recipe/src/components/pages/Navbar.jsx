import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col bg-orange-500 text-white p-5 ">
        <h1>Food House </h1>

        <div className="flex flex-col justify-end items-end">
          <NavLink
            to="/home"
            className="text-green-500"
            style={({ isActive }) => ({
              color: isActive ? "white" : "",
            })}
          >
            Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
