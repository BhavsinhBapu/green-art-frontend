import React from "react";
import BlogCard from "./Card";
import TableLoading from "components/common/TableLoading";

const CardSection = ({ blogs, loading }: any) => {
  return (
    <div className="mb-4">
      {loading ? (
        <TableLoading />
      ) : (
        <>
          <div className="row">
            {blogs.map((blog: any) => (
              <div className="col-md-4 my-3">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardSection;
