import React from "react";
import { Routes, Route } from "react-router-dom";
import Add from "../page/Add";
import Author from "../page/Author";
import Category from "../page/Category";
import Edit from "../page/Edit";
import Home from "../page/Home";
import Wishlist from "../page/Wishlist";

const MyRoutes = () => {
  return (
    <div className="lg:ml-[16rem] p-3 lg:p-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/category" element={<Category />} />
        <Route path="/add" element={<Add />} />
        <Route path="/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
