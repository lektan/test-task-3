import React from "react";

import { useSelector } from "react-redux";
import AuthorItem from "./AuthorItem";

const AuthorList = () => {

  const authorList = useSelector((state) =>
    state.books.value.map((a) => a.author)
  );

  return (
    <div className="grid grid-cols-1 gap-3">
      {authorList.map((author, id) => (
        <AuthorItem key={id} author={author} />
      ))}
    </div>
  );
};

export default AuthorList;
