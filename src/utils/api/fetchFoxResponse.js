import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const fetchFoxResponse = async (userInput) => {
  try {
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
  } catch (error) {
    console.error("Error fetching Fox response:", error.message);
    throw error;
  }
};

export default fetchFoxResponse;
