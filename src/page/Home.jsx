import React from "react";
import { useSelector } from "react-redux";

import Title from "../components/Title";
import BookItem from "../components/BookItem";
import { selectBooks } from "../store/BookSlice";

const Home = () => {
  const bookList = useSelector(selectBooks);

  return (
    <div>
      <Title title="Books" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {bookList !== null
          ? bookList.map((book) => <BookItem key={book.id} book={book} />)
          : "No books"}
      </div>
    </div>
  );
};

export default Home;
