import React, { useState } from "react";
import axios from "../services/api";

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, mediaUrl, createdAt: new Date().toISOString() };

    axios
      .post("/api/posts", newPost)
      .then((response) => onPostCreated(response.data))
      .catch((error) => console.error("Error creating post:", error));
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Media URL"
          value={mediaUrl}
          onChange={(e) => setMediaUrl(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;