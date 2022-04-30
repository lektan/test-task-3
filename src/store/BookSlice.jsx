import { createSlice, current } from "@reduxjs/toolkit";

import { Data } from "../data/Data";

export const bookSlice = createSlice({
  name: "books",
  initialState: { value: Data },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
    deleteBook: (state, action) =>
      void (state.value = state.value.filter(
        (book) => book.id !== action.payload.id
      )),
    updateBook: (state, action) => {
      state.value.map((book) => {
        if (book.id === action.payload.id) {
          book.title = action.payload.title;
          book.author = action.payload.author;
          book.category = action.payload.category;
          book.year = action.payload.year;
          book.publisher = action.payload.publisher;
          book.img = action.payload.img;
        }
        return true;
      });
    },
    addWish: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addBook, deleteBook, updateBook, addWish } = bookSlice.actions;
export default bookSlice.reducer;
