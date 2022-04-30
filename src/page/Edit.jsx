import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateBook } from "../store/BookSlice";
import { useParams, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import Title from "../components/Title";

const Edit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const book = useSelector((state) => state.books.value);
  const exactBook = book.find((b) => b.id == id);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: exactBook,
  });
  const onSubmit = (data) => {
    dispatch(
      updateBook({
        id,
        ...data,
      })
    );

    navigate("/");
  };
  return (
    <div>
      <Title title="Edit Book" />
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
          {errors.title && <span>This field is required</span>}
        </div>
        <div>
          <input
            className="py-3 px-4 border outline-none w-full"
            {...register("author", { required: true })}
            placeholder="Author"
          />
          {errors.author && <span>This field is required</span>}
        </div>
        <div>
          <input
            className="py-3 px-4 border outline-none w-full"
            {...register("category", { required: true })}
            placeholder="Category"
          />
          {errors.category && <span>This field is required</span>}
        </div>
        <div>
          <input
            className="py-3 px-4 border outline-none w-full"
            {...register("year", { required: true })}
            placeholder="Year"
          />
          {errors.year && <span>This field is required</span>}
        </div>
        <div>
          <input
            className="py-3 px-4 border outline-none w-full"
            {...register("publisher", { required: true })}
            placeholder="Publisher"
          />
          {errors.publisher && <span>This field is required</span>}
        </div>
        <div>
          <input
            className="py-3 px-4 border outline-none w-full"
            {...register("img", { required: true })}
            placeholder="Image url"
          />
          {errors.img && <span>This field is required</span>}
        </div>
        <input
          className="bg-black text-white py-3 cursor-pointer"
          value="Edit"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Edit;
