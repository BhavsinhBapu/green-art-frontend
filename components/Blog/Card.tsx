import React from "react";

const BlogCard = () => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="/user-content-wrapper-bg.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
};

export default BlogCard;
