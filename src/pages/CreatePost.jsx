import React, { useState } from "react";
import axios from "../services/api";
import { toast } from "react-toastify";

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      mediaUrl,
      createdAt: new Date().toISOString(),
    };

    axios
      .post("/api/posts", newPost)
      .then((response) => {
        onPostCreated(response.data);
        toast.success("Post created!");
        setTitle("");
        setContent("");
        setMediaUrl("");
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        toast.error("Failed to create post.");
      });
  };

  return (
    <div className="post-card">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input-field"
        />
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="edit-textarea"
        />
        <input
          type="text"
          placeholder="Media URL (optional)"
          value={mediaUrl}
          onChange={(e) => setMediaUrl(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
