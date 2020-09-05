export type BlogCategoryRes = { _id: string; title: string };

export interface ApiResponse {
  ok: boolean;
  message: string;
  status: number;
}

export type BlogResType = {
  _id?: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  body: {
    data: string;
    html: string;
    text: string;
  };
  category: BlogCategoryRes;
  published: boolean;
  imgUrl?: { secure_url: string; public_id: string };
};

export interface BlogRes extends ApiResponse {
  properties: BlogResType[];
}

export interface ErrorRes {
  reason: string;
}
