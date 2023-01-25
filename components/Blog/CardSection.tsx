import React from "react";
import BlogCard from "./Card";
import TableLoading from "components/common/TableLoading";
import { NoItemFound } from "components/NoItemFound/NoItemFound";

const CardSection = ({ blogs, loading }: any) => {
  return (
    <div className="mb-5">
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
      {blogs.length === 0 && <NoItemFound />}
    </div>
  );
};

export default CardSection;
