import React, { useState } from "react";
import CommentBox from "./CommentBox";
import { AiOutlineHeart, AiOutlineMessage, AiOutlineShareAlt } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi"; // Importing a generic user icon

const PostCard = ({ post, onDelete, onLike }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(post.content);

  const handleSave = () => {
    post.content = editedContent;
    setIsEditing(false);
  };

  const handleLike = () => {
    onLike(post.id);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <BiUserCircle className="user-icon" /> {/* Generic person icon */}
          <div>
            <span className="username">{post.username || "Anonymous"}</span>
          </div>
        </div>
      </div>
      <h3>{post.title}</h3>
      {post.mediaUrl && (
        <img src={post.mediaUrl} alt={post.title} className="post-img" />
      )}
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className="edit-textarea"
        />
      ) : (
        <p>{post.content}</p>
      )}
      <div className="post-actions">
        <button className="post-action" onClick={handleLike}>
          <AiOutlineHeart className="action-icon" /> {post.likes || 0}
        </button>
        <button className="post-action">
          <AiOutlineMessage className="action-icon" />
        </button>
        <button className="post-action">
          <AiOutlineShareAlt className="action-icon" />
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
        {isEditing && <button onClick={handleSave}>Save</button>}
        <button onClick={() => onDelete(post.id)}>Delete</button>
      </div>
      <CommentBox postId={post.id} />
    </div>
  );
};

export default PostCard;