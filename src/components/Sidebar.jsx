import React from "react";
import { NavLink } from "react-router-dom";

const menu = ["authors", "category", "wishlist", "add"];

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`fixed z-50 bg-white w-72 duration-300 lg:w-[16rem] shadow-md h-screen pt-10 ${
        isMenuOpen ? "left-0" : "-left-full"
      } lg:left-0`}
    >
      <h1 className="text-3xl font-semibold text-center mb-10">Menu</h1>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#eee" } : { backgroundColor: "" }
        }
        onClick={() => setIsMenuOpen(false)}
        to="/"
        className="capitalize block px-4 py-2 transition duration-200 hover:bg-gray-100"
      >
        Home
      </NavLink>
      {menu.map((el, id) => (
        <NavLink
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#eee" } : { backgroundColor: "" }
          }
          onClick={() => setIsMenuOpen(false)}
          key={id}
          to={`/${el}`}
          className="capitalize block px-4 py-2 transition duration-200 hover:bg-gray-100"
        >
          {el}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
