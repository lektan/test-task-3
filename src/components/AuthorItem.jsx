import React from "react";

const AuthorItem = ({ author }) => {
  return (
    <>
      <div className="px-10 py-10 text-3xl font-semibold border">{author}</div>
    </>
  );
};

export default AuthorItem;
