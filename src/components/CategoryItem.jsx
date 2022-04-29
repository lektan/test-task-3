import React from "react";

const CategoryItem = ({ category, counts }) => {
  return (
    <>
      <div className="px-10 py-10 text-3xl font-semibold border flex justify-between items-center">
        <span>{category}</span>
        <span>{counts}</span>
      </div>
    </>
  );
};

export default CategoryItem;
