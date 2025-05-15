import React, { useState } from "react";
import { toast } from "react-toastify";

const CommentBox = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      toast.info("Comment added.");
      setNewComment("");
    }
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <h4>Comments</h4>
      {comments.map((comment, index) => (
        <p key={index} style={{ margin: "4px 0" }}>💬 {comment}</p>
      ))}
      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="input-field"
        />
        <button onClick={handleAddComment} className="submit-button">Comment</button>
      </div>
    </div>
  );
};

export default CommentBox;
