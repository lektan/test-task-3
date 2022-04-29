import React from "react";
import { Routes, Route } from "react-router-dom";
import Author from "../page/Author";
import Home from "../page/Home";

const MyRoutes = () => {
  return (
    <div className="ml-[16rem] p-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Author />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
