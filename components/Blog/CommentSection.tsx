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
      <div className="container">
        <h2>Comments</h2>
        <ul className="list-group">
          {commentList?.map((comment: any) => (
            <li className="list-group-item">
              <h4>{comment?.email}</h4>
              <small>{comment.name}</small>
              <p>{comment.message}</p>
              <a href={comment.website}>{comment.website}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <h2>Leave a Comment</h2>
        <form onSubmit={onSubmit}>
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
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? "Please wait.." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
