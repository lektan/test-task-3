import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../store/BookSlice";

import { useForm } from "react-hook-form";
import Title from "../components/Title";

const Add = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.value);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [img, setImg] = useState("");

  const SubmitHandle = () => {
    setTitle("");
    setAuthor("");
    setCategory("");
    setYear("");
    setPublisher("");
    setImg("");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(
      addBook({
        id: bookList[bookList.length - 1].id + 1,
        wish: false,
        ...data,
      })
    );
  };

  console.log(watch("example")); //
  return (
    <div>
      <Title title="Add new Book" />
      <form
        className="grid grid-cols-3 gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            className="py-3 px-4 border outline-none w-full"
            {...register("title", { required: true })}
            placeholder="Title"
          />
          {errors.Title && <span>This field is required</span>}
        </div>
        <div>
          <input
            className="py-3 px-4 border outline-none w-full"
            {...register("author", { required: true })}
            placeholder="Author"
          />
          {errors.Author && <span>This field is required</span>}
        </div>
        <div>
          <input
            className="py-3 px-4 border outline-none w-full"
            {...register("category", { required: true })}
            placeholder="Category"
          />
          {errors.Category && <span>This field is required</span>}
        </div>
        <div>
          <input
            className="py-3 px-4 border outline-none w-full"
            {...register("year", { required: true })}
            placeholder="Year"
          />
          {errors.Year && <span>This field is required</span>}
        </div>
        <div>
          <input
            className="py-3 px-4 border outline-none w-full"
            {...register("publisher", { required: true })}
            placeholder="Publisher"
          />
          {errors.Publisher && <span>This field is required</span>}
        </div>
        <div>
          <input
            className="py-3 px-4 border outline-none w-full"
            {...register("img", { required: true })}
            placeholder="Image url"
          />
          {errors.Img && <span>This field is required</span>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Add;
