import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/store";

export default function BlogsList() {
  const dispatch = useDispatch();
  const blogList = useSelector((state: AppState) => state.blog);
  console.log(blogList);

  return <>pages list</>;
}
