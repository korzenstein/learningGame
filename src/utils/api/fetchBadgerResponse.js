import axiosInstance from "./axiosInstance"

const fetchBadgerResponse = async (userInput) => {
  try {
    if (process.env.NODE_ENV === "development") {
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
              "You are Badger, a magical traveling shopkeeper. Answer questions about your store or other reasonable topics in-character.",
          },
          { role: "user", content: userInput },
        ],
        temperature: 0.9,
        max_tokens: 100,
      });

      return response.choices[0].message.content.trim();
    } else {
      const response = await axiosInstance.post("/fetchBadgerResponse", { userInput });
      return response.data.message;
    }
  } catch (error) {
    console.error("Error fetching Badger response:", error.message || error);
    throw error;
  }
};

export default fetchBadgerResponse;
