import { formateDateMunite } from "common";
import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {
  return (
    <>
      <Link href={"/blog/" + blog?.post_id}>
        <a>
          <div className="blogCard p-4 shadow-sm rounded card">
            <img
              className="rounded"
              src={blog?.thumbnail}
              alt="Card image cap"
            />
            <div className="newsCardText pt-4">
              <h3 className="titleText">{blog?.title}</h3>
              <small>
                {formateDateMunite(blog?.created_at)}
              </small>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default BlogCard;
