import { combineReducers } from "@reduxjs/toolkit";
import blogSlice from "./features/blog/blogSlice";

const rootReducer = combineReducers({
  blog: blogSlice,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
