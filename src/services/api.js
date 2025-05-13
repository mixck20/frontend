import axios from "axios";

// Create an Axios instance for API requests
const api = axios.create({
  baseURL: "http://localhost:8080", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;