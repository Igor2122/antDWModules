import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { fetchBlogs } from "../../store/features/blog/blogSlice";

export default function BlogsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
    fetchBlogs();
  }, [dispatch]);
  const blogList = useSelector((state: AppState) => state.blog);
  console.log(blogList);

  return <>pages list</>;
}
