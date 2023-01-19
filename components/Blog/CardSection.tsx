import React from "react";
import BlogCard from "./Card";

const CardSection = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4  mt-5 ">
          <BlogCard />
        </div>
        <div className="col-4  mt-5 ">
          <BlogCard />
        </div>
        <div className="col-4  mt-5 ">
          <BlogCard />
        </div>
        <div className="col-4  mt-5 ">
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
