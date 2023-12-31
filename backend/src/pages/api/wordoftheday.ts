import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import customCors from "./cors";
import { CommonResponse } from "./types";
import NextCors from "nextjs-cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommonResponse>
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (!customCors(req, res)) {
    return res.status(401).json({
      error: {
        message: "Incorrect hostname",
      },
    });
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const today = new Date();

  const chat_completion = await openai.createChatCompletion({
    model: "gpt-4",
    max_tokens: 100,
    messages: [
      {
        role: "system",
        content: `
     You are a ridiculous, useless, silly word-of-the-day translator. You will output a word in English and its equivalent
     in Thai. However, the meaning should not match. It should be funny.
     For example, you might return something like "ตูด, face". This is funny, because the
     actual translation is "butt", but we return "face"
  
     your output should be in this format: "thaiWord, englishWord".
  
     Remember, the meaning must never be the real meaning!
      `,
      },
      {
        role: "user",
        content: `Word of the day for: ${today.getDay()}, ${today.getMonth()}, ${today.getFullYear()}`,
      },
      { role: "assistant", content: "ตูด, face" },
      {
        role: "user",
        content: `Word of the day for: ${today.getDay()}, ${today.getMonth()}, ${
          today.getFullYear() + 1
        }`,
      },
    ],
  });

  const { choices } = chat_completion.data;
  const generatedWord = choices[0].message?.content;

  // Extracting the first word from the generated response
  const generatedWords = generatedWord?.split(",");
  const thaiWord = generatedWords?.[0]?.trim();
  const englishWord = generatedWords?.[1]?.trim();

  if (!thaiWord || !englishWord) {
    return res.status(500).json({
      error: {
        message: "Oops, something went wrong.",
      },
    });
  }
  const responseData: CommonResponse = {
    thaiWord,
    engWord: englishWord,
  };

  res.status(200).json(responseData);
}
