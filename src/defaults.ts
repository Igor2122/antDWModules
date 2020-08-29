import { BlogResType } from "./types";

export const blogInitialState: BlogResType[] = [
  {
    title: "",
    metaTitle: "",
    metaDescription: "",
    slug: "",
    body: {
      data: "",
      html: "",
      text: "",
    },
    category: { _id: "string", title: "string" },
    published: false,
    imgUrl: { secure_url: "", public_id: "" },
  },
];
