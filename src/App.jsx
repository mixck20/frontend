import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";

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
    </Router>
  );
};

export default App;