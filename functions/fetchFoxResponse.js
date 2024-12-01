import axiosInstance from "./utils/axiosInstance"; // Reuse Axios instance

export const handler = async (event) => {
  try {
    const { userInput } = JSON.parse(event.body); // Parse the user input

    // Use Axios instance to make the API request
    const response = await axiosInstance.post("/chat/completions", {
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

    // Return the OpenAI response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: response.data.choices[0].message.content.trim(),
      }),
    };
  } catch (error) {
    console.error("Error in serverless function:", error.message || error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Fox response" }),
    };
  }
};
