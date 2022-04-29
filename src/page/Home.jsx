import React from "react";
import BookList from "../components/BookList";
import Title from "../components/Title";

const Home = () => {
  return (
    <div>
      <Title title="Books" />
      <BookList />
    </div>
  );
};

export default Home;
