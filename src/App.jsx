import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreated = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route
          path="/create"
          element={<CreatePost onPostCreated={handlePostCreated} />}
        />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Router>
  );
};

export default App;
