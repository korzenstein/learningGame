import axiosInstance from './utils/axiosInstance'

export const handler = async (event) => {
  try {
    const { userInput } = JSON.parse(event.body); // Parse user input from the request

    // Use Axios instance to make the API request
    const response = await axiosInstance.post("/chat/completions", {
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
      body: JSON.stringify({ error: "Failed to fetch Badger response" }),
    };
  }
};
