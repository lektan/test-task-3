import React from "react";

const AuthorItem = ({ author }) => {
  return (
    <>
      {author.map((a, id) => (
        <div key={id} className="px-10 py-10 text-3xl font-semibold border">
          {a}
        </div>
      ))}
    </>
  );
};

export default AuthorItem;
