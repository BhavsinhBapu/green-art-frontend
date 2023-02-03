import React, { useState } from "react";
import { LinkTopaginationString } from "state/actions/news";

const Pagination = ({
  setRecentNews,
  links,
  setLoading,
  setLinks,
  selected,
}: any) => {
  return (
    <div className="row justify-content-center justify-content-md-end">
      <ul className="pagination Paginate mb-5">
        {links.map((link: any, index: number) =>
          link.label === "&laquo; Previous" ? (
            <li
              key={index}
              className="page-item "
              onClick={() => {
                LinkTopaginationString(
                  link,
                  setRecentNews,
                  setLoading,
                  setLinks,
                  selected
                );
              }}
            >
              <span className="page-link">Previous</span>
            </li>
          ) : link.label === "Next &raquo;" ? (
            <li
              key={index}
              className="page-item "
              onClick={() => {
                LinkTopaginationString(
                  link,
                  setRecentNews,
                  setLoading,
                  setLinks,
                  selected
                );
              }}
            >
              <span  className="spanage-link">
                Next
              </span>
            </li>
          ) : (
            <li
              key={index}
              className="page-item"
              onClick={() => {
                LinkTopaginationString(
                  link,
                  setRecentNews,
                  setLoading,
                  setLinks,
                  selected
                );
              }}
            >
              <span
                className={`page-link ${
                  link.active === true && "paginationActive shadow"
                }`}
              >
                {link.label}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Pagination;
