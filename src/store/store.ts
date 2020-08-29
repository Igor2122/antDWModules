import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { blogSlice } from "./features/blog/blogSlice";

const reducer = combineReducers({
  blog: blogSlice.reducer,
});

export type AppState = ReturnType<typeof reducer>;

export default configureStore({
  reducer,
});
