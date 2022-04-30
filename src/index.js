import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import bookReducer from "./store/BookSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { loadState } from "./store/browser-storage";
import { saveState } from "./store/browser-storage";
import { debounce } from "debounce";

const store = configureStore({
  reducer: {
    books: bookReducer,
    preloadedState: loadState(),
  },
});

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

export const RootState = store.getState;
console.log(RootState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
