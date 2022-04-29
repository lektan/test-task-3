import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BookItem from "./BookItem";

const BookList = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.value);

  return (
    <div className="grid grid-cols-5 gap-5">
      {bookList.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
