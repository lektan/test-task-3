import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWish } from "../store/BookSlice";

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
    <div>
      <div className="relative overflow-hidden group">
        <span className="absolute top-0 right-0 bg-white px-4 py-2 font-semibold">
          {book.category}
        </span>
        {book.wish ? (
          <button
            onClick={wishlistAddHandler}
            className="bg-white absolute -bottom-10 group-hover:bottom-0 left-6 font-semibold duration-300 px-4 py-2"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={wishlistAddHandler}
            className="bg-white absolute -bottom-10 group-hover:bottom-0 left-6 font-semibold duration-300 px-4 py-2"
          >
            Add
          </button>
        )}

        <img className="w-full h-[20vw]" src={book.img} alt="" />
      </div>
      <div className="mt-2 px-1">
        <h1 className="font-semibold">{book.title}</h1>
        <p className="text-gray-400">
          {book.author.map((a, id) => (
            <span key={id} className="block">
              {a}{" "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
