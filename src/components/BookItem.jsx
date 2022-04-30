import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWish, deleteBook } from "../store/BookSlice";

import { ReactComponent as Star } from "../icons/Star.svg";
import { ReactComponent as StarFill } from "../icons/Star_fill.svg";
import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.value);

  const wishlistAddHandler = () => {
    const wished = bookList.map((item) => {
      if (item.id === book.id) {
        return {
          ...item,
          wish: !item.wish,
        };
      }
      return item;
    });

    dispatch(addWish(wished));
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <span className="absolute top-0 right-0 bg-white px-4 py-2 font-semibold">
          {book.category}
        </span>
        <button
          onClick={wishlistAddHandler}
          className="absolute top-0 -left-20 bg-white w-10 h-10 flex items-center justify-center duration-300 group-hover:left-0"
        >
          {book.wish ? <StarFill /> : <Star />}
        </button>
        <div className="absolute -bottom-20 group-hover:bottom-0 flex duration-300 left-1/2 transform -translate-x-1/2">
          <Link
            className="px-4 py-2 border hover:bg-black hover:text-white hover:border-black duration-300 bg-white "
            to={`/${book.id}`}
          >
            Edit
          </Link>
          <button
            onClick={() => {
              dispatch(deleteBook({ id: book.id }));
            }}
            className="px-4 py-2 border hover:bg-black hover:text-white hover:border-black duration-300 bg-white"
          >
            Delete
          </button>
        </div>

        <img className="w-full h-[20vw]" src={book.img} alt="" />
      </div>
      <div className="mt-2 px-1">
        <h1 className="font-semibold">{book.title}</h1>
        <p className="text-gray-400">{book.author}</p>
      </div>
    </div>
  );
};

export default BookItem;
