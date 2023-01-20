import React from "react";
import BlogCard from "./Card";

const CardSection = ({ blogs }: any) => {
  return (
    <div>
      <div className="row">
        {blogs.map((blog: any) => (
          <div className="col-4 mt-5">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
