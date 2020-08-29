import { createSlice } from "@reduxjs/toolkit";
import { blogInitialState } from "../../defaults";

export const blogSlice = createSlice({
  name: "todos",
  initialState: blogInitialState,
  reducers: {},
});
