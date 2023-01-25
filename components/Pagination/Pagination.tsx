import React from "react";

const Pagination = () => {
  return (
    <div className="row justify-content-center justify-content-md-end">
      <ul className="pagination Paginate mb-5">
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
        <li className="page-item">
          <a href="" className="paginationActive shadow page-link">
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

export default Pagination;
