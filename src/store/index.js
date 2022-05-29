import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { books } from "./reducers/books";

const rootReducer = { books };

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
