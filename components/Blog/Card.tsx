import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {
  return (
    <Link href={"/blog/" + blog?.id}>
      <div className="card">
        <img
          className="card-img-top"
          src={blog?.thumbnail}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{blog?.title}</h5>
          {/* <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p> */}
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
