import { TYPE_BLOG_FEATURED, TYPE_BLOG_RECENT } from "helpers/core-constants";
import {
  getBlogCategory,
  getBlogDetails,
  getBlogs,
  postComment,
} from "service/blog";

export const BlogHomePageAction = async () => {
  const FeaturedBlogs = await getBlogs(TYPE_BLOG_FEATURED);
  const RecentBlogs = await getBlogs(TYPE_BLOG_RECENT);
  const Categories = await getBlogCategory();

  return { FeaturedBlogs, RecentBlogs, Categories };
};

export const GetBlogDetailsAction = async (id: string) => {
  const BlogDetails = await getBlogDetails(id);
  return { BlogDetails };
};

export const PostCommentAction = async (
  name: string,
  email: string,
  website: string,
  message: string,
  post_id: string
) => {
  const Response = await postComment(name, email, website, message, post_id);
  console.log(Response, "");
};
