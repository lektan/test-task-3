import React from "react";

import { useSelector } from "react-redux";
import AuthorItem from "./AuthorItem";

const AuthorList = () => {
  let authorList = useSelector((state) => state.books.value);
  if (authorList !== null) {
    authorList = authorList.map((a) => a.author);
  }

  return (
    <div className="grid grid-cols-1 gap-3">
      {authorList !== null
        ? authorList.map((author, id) => (
            <AuthorItem key={id} author={author} />
          ))
        : "No author"}
    </div>
  );
};

export default AuthorList;
