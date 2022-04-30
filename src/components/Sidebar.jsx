import React from "react";
import { Link } from "react-router-dom";

const menu = ["authors", "category", "wishlist", "add"];

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div
      className={`fixed z-50 bg-white w-72 duration-300 lg:w-[16rem] shadow-md h-screen pt-10 ${
        isMenuOpen ? "left-0" : "-left-full"
      } lg:left-0`}
    >
      <h1 className="text-3xl font-semibold text-center mb-10">Menu</h1>
      <Link
        to="/"
        className="capitalize block px-4 py-2 transition duration-200 hover:bg-gray-100"
      >
        Home
      </Link>
      {menu.map((el, id) => (
        <Link
          key={id}
          to={`/${el}`}
          className="capitalize block px-4 py-2 transition duration-200 hover:bg-gray-100"
        >
          {el}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
