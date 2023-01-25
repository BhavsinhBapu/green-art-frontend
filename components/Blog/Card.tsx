import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {
  console.log(blog);

  return (
    <>
      <Link href={"/blog/" + blog?.post_id}>
        <a>
          <div className="blogCard card p-4">
            <img
              className="rounded"
              src={blog?.thumbnail}
              alt="Card image cap"
            />
            <div className="newsCardText pt-4">
              <h3>{blog?.title}</h3>
              <p>
                Grid trading is suitable for volatile and sideways markets where
                prices fluctuate within a given range, as it aims to profit from
                small price movements. In this article.
              </p>
              <small>
                {moment(blog?.createdAt).subtract(1, "days").calendar()}
              </small>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default BlogCard;
