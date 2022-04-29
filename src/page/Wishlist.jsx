import React from "react";
import { useSelector } from "react-redux";

import Title from "../components/Title";
import BookItem from "../components/BookItem";

const Wishlist = () => {
  const wishList = useSelector((state) =>
    state.books.value.filter((b) => b.wish === true)
  );

  return (
    <div>
      <Title title="My wishlist" />
      <div className="grid grid-cols-5 gap-5">
        {wishList.length > 0
          ? wishList.map((book) => <BookItem key={book.id} book={book} />)
          : "Wishlist is empty"}
      </div>
    </div>
  );
};

export default Wishlist;
