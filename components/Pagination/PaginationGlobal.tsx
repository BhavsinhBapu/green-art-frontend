import React, { useState } from "react";

const PaginationGlobal = ({
  setTimelineData,
  links,
  setLoading,
  setLinks,
  selected,
  LinkTopaginationString,
}: any) => {
  console.log(links, "linkslinkslinks");
  return (
    <div className="row justify-content-center justify-content-md-end">
      <ul className="pagination Paginate mb-5">
        {links?.map((link: any, index: number) =>
          link.label === "&laquo; Previous" ? (
            <li
              key={index}
              className="page-item "
              onClick={() => {
                LinkTopaginationString(
                  link,
                  setTimelineData,
                  setLoading,
                  setLinks,
                  selected
                );
              }}
            >
              <a href="" className="page-link">
                Previous
              </a>
            </li>
          ) : link.label === "Next &raquo;" ? (
            <li
              key={index}
              className="page-item "
              onClick={() => {
                LinkTopaginationString(
                  link,
                  setTimelineData,
                  setLoading,
                  setLinks,
                  selected
                );
              }}
            >
              <a href="" className="page-link">
                Next
              </a>
            </li>
          ) : (
            <li
              key={index}
              className="page-item"
              onClick={() => {
                LinkTopaginationString(
                  link,
                  setTimelineData,
                  setLoading,
                  setLinks,
                  selected
                );
              }}
            >
              <a
                href=""
                className={`page-link ${
                  link.active === true && "paginationActive shadow"
                }`}
              >
                {link.label}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default PaginationGlobal;
