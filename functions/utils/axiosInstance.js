import axios from "axios";

//instance for serverless
const axiosInstance = axios.create({
  baseURL: "https://api.openai.com/v1", // OpenAI API base URL
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Securely access API key
  },
});

export default axiosInstance;
