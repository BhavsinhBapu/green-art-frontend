import { TYPE_BLOG_RECENT } from "helpers/core-constants";
import request from "lib/request";

export const getBlogs = async (type: any) => {
  const { data } = await request.get(
    `/blog/get?type=${type ? type : TYPE_BLOG_RECENT}`
  );
  return data;
};
export const getBlogCategory = async (type: any) => {
  const { data } = await request.get(
    `/blog/get?type=${type ? type : TYPE_BLOG_RECENT}`
  );
  return data;
};
