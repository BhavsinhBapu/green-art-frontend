import React from "react";
import BlogCard from "./Card";
import TableLoading from "components/common/TableLoading";

const CardSection = ({ blogs, loading }: any) => {
  return (
    <div>
      {loading ? (
        <TableLoading />
      ) : (
        <div className="row">
          {blogs.map((blog: any) => (
            <div className="col-4 mt-5">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSection;
