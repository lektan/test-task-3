import { createSlice } from "@reduxjs/toolkit";

import { Data } from "../data/Data";

export const bookSlice = createSlice({
  name: "books",
  initialState: { value: Data },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);
      return true;
    },
    updateBook: (state, action) => {
      state.value.map((book) => {
        if (book.id === action.payload.id) {
          state.value = action.payload;
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
