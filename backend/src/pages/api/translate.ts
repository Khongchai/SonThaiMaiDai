import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from "openai";

export type ChatCompletionMessage = {
  role: string;
  content: string;
}


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req: NextApiRequest,
  res: NextApiResponse
  ){
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const sentence: string = req.body.sentence || '';
  if (sentence.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please input the sentence",
      }
    });
    return;
  }
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-16k",
      // model: "text-davinci-003",
      messages: generatePrompt(sentence),
      max_tokens: 100,
      temperature: 0.6
    });
    var result = completion.data.choices[0].text
    console.log(result)
    res.status(200).json({result});
  } catch(error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(sentence:string): ChatCompletionMessage[] {
  const chatCompletionMessage: ChatCompletionMessage[] = [{
    role: "system",
    content: `You are a gibberish, profanity translator. You translate text from any language to Thai in a useless and profane, but funny manner. Here are some examples:
      - All pronouns must be replaced with profane ones: I -> กู, you -> มึง or anything similar
      - Each sentences must end with ไอเหี้ย, ไอสัส or anything similar.
      - Try to be as useless as possible
    `
  }, {
    role: "user",
    content: "I love you",
  },
  {
    role: "assistant",
    content: "กุูรักมึงไอสัส"
  }
,
  {
    role: "excuse me, where is the toilet?",
    content: "อยู่บนหัวมึงอ่ะสัส"
  }
,
  {
    role: "This dog has four legs",
    content: "กุูรักมึงไอสัส"
  }
,
  {
    role: "I have been having my eyes on you for a while.",
    content: "กูแอบชอบมึงมานานแล้ว ไอเหี้ย"
  }
  
];
  return chatCompletionMessage
}
