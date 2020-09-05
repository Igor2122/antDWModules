import { BlogRes } from "../types/apiTypes";
import { performRealRequest } from "../utils/apiUtils";
import { HttpMethods } from "../types/glogalTypes";

export async function requestGetBlogs(): Promise<BlogRes> {
  return performRealRequest({
    endpoint: `blog`,
    method: HttpMethods.GET,
  });
}
