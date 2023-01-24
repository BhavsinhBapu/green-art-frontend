import { TYPE_NEWS_POPULER, TYPE_NEWS_RECENT } from "helpers/core-constants";
import { toast } from "react-toastify";
import {
  getNewsCategory,
  getNewsDetails,
  getNews,
  postCommentNews,
} from "service/news";

export const NewsHomePageAction = async () => {
  const PopularNews = await getNews(TYPE_NEWS_POPULER);
  const RecentNews = await getNews(TYPE_NEWS_RECENT);
  const Categories = await getNewsCategory();

  return { PopularNews, RecentNews, Categories };
};

export const getNewsDetailsAction = async (id: string) => {
  const NewsDetails = await getNewsDetails(id);
  return { NewsDetails };
};

export const PostCommentAction = async (
  name: string,
  email: string,
  website: string,
  message: string,
  post_id: string,
  setCommentList: any,
  setLoading: any,
  setPostComment: any
) => {
  setLoading(true);
  if (!name || !email || !website || !message) {
    toast.error("Please fillup all the field's");
    setLoading(false);
    return;
  }
  const Response = await postCommentNews(
    name,
    email,
    website,
    message,
    post_id
  );
  setCommentList(Response.data);
  setPostComment({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  setLoading(false);
};
