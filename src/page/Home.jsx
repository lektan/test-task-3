import React from "react";
import { useSelector } from "react-redux";

import Title from "../components/Title";
import BookItem from "../components/BookItem";

const Home = () => {
  const bookList = useSelector((state) => state.books.value);

  return (
    <div>
      <Title title="Books" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {bookList.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
