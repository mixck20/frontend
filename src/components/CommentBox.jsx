import React, { useState } from "react";

const CommentBox = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <h4>Comments</h4>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Comment</button>
    </div>
  );
};

export default CommentBox;