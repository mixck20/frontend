import React, { useState, useEffect } from "react";
import axios from "../services/api";
import PostCard from "../components/PostCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the backend
    axios
      .get("/api/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => setPosts(posts.filter((post) => post.id !== id)))
      .catch((error) => console.error("Error deleting post:", error));
  };

  const handleLike = (id) => {
    // Simulate liking a post
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: (post.likes || 0) + 1 } : post
      )
    );
  };

  return (
    <div>
      <h1>Feed</h1>
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