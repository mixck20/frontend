import React, { useState, useEffect } from "react";
import axios from "../services/api";
import PostCard from "../components/PostCard";
import CreatePost from "./CreatePost";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((response) => setPosts(response.data.reverse()))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleDelete = (id) => {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => console.error("Failed to delete post."));
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: (post.likes || 0) + 1 } : post
      )
    );
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <CreatePost onPostCreated={handlePostCreated} />
      <h1 style={{ marginTop: "30px" }}>Feed</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onDelete={handleDelete}
            onLike={handleLike}
          />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default Feed;