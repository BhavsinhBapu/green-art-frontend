import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {
  return (
    <Link href={"/blog/" + blog?.post_id}>
      <div className="card">
        <img
          className="card-img-top"
          src={blog?.thumbnail}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{blog?.title}</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            {moment(blog?.createdAt).subtract(1, "days").calendar()}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
