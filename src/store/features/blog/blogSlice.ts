import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blogInitialState } from "../../../defaults";
import { AppThunk } from "../../store";
import { requestGetBlogs } from "../../../api/blogRequests";
import { BlogResType } from "../../../types/apiTypes";

export const blogSlice = createSlice({
  name: "blog",
  initialState: blogInitialState,
  reducers: {
    add(state, { payload }: PayloadAction<BlogResType[]>) {
      state = payload;
    },
  },
});

export const { add } = blogSlice.actions;

export default blogSlice.reducer;
export const fetchBlogs = (): AppThunk => async (dispatch) => {
  console.log("called");
  try {
    const { properties } = await requestGetBlogs();
    dispatch(add(properties));
  } catch (e) {
    console.log(e);
  }
};
