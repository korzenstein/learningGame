const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Securely stored in Netlify

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Say hello!',
        max_tokens: 10,
      }),
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from OpenAI' }),
    };
  }
};
