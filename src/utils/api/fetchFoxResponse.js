import axiosInstance from "./axiosInstance";

const fetchFoxResponse = async (userInput) => {
  try {
    if (process.env.NODE_ENV === "development") {
      // Local development: Direct API call
      const { OpenAI } = require("openai");

      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are Fox, a mischievous and witty character who loves music and adventures. Answer questions with humor and charm.",
          },
          { role: "user", content: userInput },
        ],
        temperature: 0.9,
        max_tokens: 100,
      });

      return response.choices[0].message.content.trim();
    } else {
      // Production: Call the serverless function
      const response = await axiosInstance.post("/fetchFoxResponse", {
        userInput,
      });

      return response.data.message;
    }
  } catch (error) {
    console.error("Error fetching Fox response:", error.message || error);
    throw error;
  }
};

export default fetchFoxResponse;
