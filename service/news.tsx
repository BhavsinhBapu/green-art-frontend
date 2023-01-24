import { TYPE_NEWS_RECENT } from "helpers/core-constants";
import request from "lib/request";
export const getNews = async (type: any) => {
  const { data } = await request.get(
    `/news/get?type=${type ? type : TYPE_NEWS_RECENT}`
  );
  return data;
};
export const getNewsByCategoryApi = async (category: any, subcategory: any) => {
  const { data } = await request.get(
    `/news/get?category=${category}&&subcategory=${subcategory}`
  );
  return data;
};
export const getNewsCategory = async () => {
  const { data } = await request.get(`/news/category`);
  return data;
};
export const getNewsDetails = async (id: any) => {
  const { data } = await request.get(`/news/news-details?id=${id}`);
  return data;
};
export const postCommentNews = async (
  name: any,
  email: any,
  website: any,
  message: any,
  post_id: any
) => {
  const { data } = await request.post(`/blog/comment`, {
    name: name,
    email: email,
    website: website,
    message: message,
    post_id: post_id,
  });
  return data;
};
