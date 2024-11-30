import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const fetchBadgerResponse = async (userInput) => {
  try {
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
  } catch (error) {
    console.error("Error fetching Badger response:", error.message);
    throw error;
  }
};



export default fetchBadgerResponse
