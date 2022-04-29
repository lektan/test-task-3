import React from "react";

import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const categoryList = useSelector((state) =>
    state.books.value.map((a) => a.category)
  );

  console.log(categoryList);
  // removing dublicates
  const categories = categoryList.filter(
    (value, index) => categoryList.indexOf(value) === index
  );

  // counting the number of books
  let counts = categoryList.reduce((map, val) => {
    map[val] = (map[val] || 0) + 1;
    return map;
  }, {});
  console.log();

  return (
    <div className="grid grid-cols-1 gap-3">
      {categories.map((category, id) => (
        <CategoryItem
          key={id}
          category={category}
          counts={Object.values(counts)[id]}
        />
      ))}
    </div>
  );
};

export default CategoryList;
