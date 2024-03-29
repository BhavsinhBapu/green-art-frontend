import { formateDateMunite } from "common";
import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {
  return (
    <>
      <Link href={"/blog/" + blog?.post_id}>
        <a>
          <div
            className="blogCard shadow-sm rounded card h-full"
            style={{
              minHeight: "370px",
              overflow: "hidden",
              // background: `url(${blog?.thumbnail})`,
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
              // position: "relative",
            }}
          >
            {/* <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                background: "black",
                height: "100%",
                opacity: "0.3",
                borderRadius: "10px",
                zIndex: "-1",
              }}
            ></div> */}
            <img
              className="rounded"
              src={blog?.thumbnail}
              alt="Card image cap"
              style={{ maxHeight: "245px", height: "100%" }}
            />
            <div className="newsCardText p-4 ">
              <h4 className="titleText">{blog?.title}</h4>
              <p className="pt-2" style={{ lineHeight: "18px" }}>
                {" "}
                {blog?.description?.length > 100
                  ? `${blog?.description.slice(0, 100)}...`
                  : blog?.description}
              </p>
              <p>
                <small>{formateDateMunite(blog?.created_at)}</small>
              </p>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default BlogCard;
