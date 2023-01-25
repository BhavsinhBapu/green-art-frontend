import React, { useEffect, useState } from "react";
import { PostCommentAction } from "state/actions/blog";

const CommentSection = ({ blogDetails }: any) => {
  const [postComment, setPostComment] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
    post_id: "",
  });
  const [loading, setLoading] = useState(false);
  const [commentList, setCommentList] = useState(blogDetails?.data?.comments);
  useEffect(() => {
    setCommentList(blogDetails?.data?.comments);
  }, [blogDetails?.data?.comments]);
  const onSubmit = (e: any) => {
    e.preventDefault();
    PostCommentAction(
      postComment.name,
      postComment.email,
      postComment.website,
      postComment.message,
      blogDetails?.data?.details?.post_id,
      setCommentList,
      setLoading,
      setPostComment
    );
  };
  return (
    <div className="row">
      <div className="col-12">
        <h2 className="pb-2 titleText">Comments</h2>
        {commentList?.map((comment: any) => (
          <div className="commentShow mt-3 p-3 p-md-4 rounded">
            <h5>{comment?.email}</h5>
            <small>{comment.name}</small>
            <p className="py-2">{comment.message}</p>
            <a href={comment.website}>
              <u>{comment.website}</u>
            </a>
          </div>
        ))}
      </div>
      <div className="col-12 my-5">
        <div className="row">
          <div className="col-12 d-flex align-items-center commentTitle">
            <h2 className="pb-3 titleText">Leave a Comment</h2>
            <div className="commentBar shadow-sm d-none d-sm-block"></div>
          </div>
        </div>
        <div className="rounded p-3 p-md-4 commentBox">
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    value={postComment.name}
                    onChange={(e) => {
                      setPostComment({
                        ...postComment,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={postComment.email}
                    onChange={(e) => {
                      setPostComment({
                        ...postComment,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Website:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="website"
                    placeholder="Enter website"
                    value={postComment.website}
                    onChange={(e) => {
                      setPostComment({
                        ...postComment,
                        website: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Message:</label>
                  <textarea
                    className="form-control"
                    id="message"
                    value={postComment.message}
                    onChange={(e) => {
                      setPostComment({
                        ...postComment,
                        message: e.target.value,
                      });
                    }}></textarea>
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Please wait.." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
