import axios from "axios";

//instance for frontend
const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "" : "/.netlify/functions",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
