import React, { useState } from "react";
import CommentBox from "./CommentBox";

const PostCard = ({ post, onDelete, onLike }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(post.content);

  const handleSave = () => {
    // Simulate saving updated content
    post.content = editedContent;
    setIsEditing(false);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "16px 0" }}>
      <h2>{post.title}</h2>
      {post.mediaUrl && (
        <img src={post.mediaUrl} alt={post.title} style={{ maxWidth: "100%" }} />
      )}
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <p>{post.content}</p>
      )}
      <p>Likes: {post.likes || 0}</p>
      <button onClick={() => onLike(post.id)}>Like</button>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      {isEditing && <button onClick={handleSave}>Save</button>}
      <button onClick={() => onDelete(post.id)}>Delete</button>
      <CommentBox postId={post.id} />
    </div>
  );
};

export default PostCard;