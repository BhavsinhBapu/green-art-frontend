import React from "react";
import BlogCard from "components/Blog/Card";
const BlogDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">One of three columns</div>
        <div className="col-4">
          <h1>More blog from here</h1>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
