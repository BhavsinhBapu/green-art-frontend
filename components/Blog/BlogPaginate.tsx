import React from "react";

const BlogPaginate = () => {
  return (
    <div className="row justify-content-center justify-content-md-end">
      <ul className="pagination blogPaginate mb-5">
        <li className="page-item ">
          <a href="" className="page-link">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a href="" className="page-link">
            1
          </a>
        </li>
        <li className="page-item blogPaginationActive shadow">
          <a href="" className="page-link">
            2
          </a>
        </li>
        <li className="page-item">
          <a href="" className="page-link">
            3
          </a>
        </li>
        <li className="page-item ">
          <a href="" className="page-link">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogPaginate;
