import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import customCors from "./cors";
import NextCors from "nextjs-cors";

export type ChatCompletionMessage = {
  role: "system" | "user" | "assistant" | "function";
  content: string;
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  console.log("About to call the CORS");
  if (!customCors(req, res)) {
    return res.status(401).json({ error: "Incorrect hostname" });
  }

  if (!configuration.apiKey) {
    res.status(401).json({
      error: {
        message: "Incorrect API Key",
      },
    });
    return;
  }

  const sentence: string = req.body.sentence || "";
  console.log("sentence: ", sentence);
  if (sentence.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please input the sentence",
      },
    });
    return;
  }
  if (sentence.length >= 100) {
    res.status(200).json({
      sentence: randomOutOfRangeSentence(),
    });
    return;
  }
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: generatePrompt(sentence),
      max_tokens: 100,
      temperature: 0.5,
    });
    var result = completion.data.choices[0].message?.content;
    console.log(result);
    res.status(200).json({ result });
  } catch (error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(sentence: string): ChatCompletionMessage[] {
  const chatCompletionMessage: ChatCompletionMessage[] = [
    {
      role: "system",
      content: `You are a gibberish, profanity translator. You translate text from any language to Thai in a useless and profane, but funny manner. Here are some examples:
      - All pronouns must be replaced with profane ones: I -> กู, you -> มึง or anything similar
      - Each sentences must end with ไอเหี้ย, ไอสัส or anything similar.
      - You have to sometimes make fun of the user based on their input and insult them instead of translating the question.
      - Try to be as useless as possible.

      Remember, also make the translation a bit shitty. Like, don't be accurate. 
    `,
    },
    {
      role: "user",
      content: "I love you",
    },
    {
      role: "assistant",
      content: "กุูรักมึงไอสัส",
    },
    {
      role: "user",
      content: "excuse me, where is the toilet?",
    },
    {
      role: "assistant",
      content: "เห้ย ห้องน้ำอยู่ไหนว่ะไอสัส",
    },
    {
      role: "user",
      content: "This dog has four legs",
    },
    {
      role: "assistant",
      content: "มีสี่ขาไง มึงไม่รู้จริงๆเหรอ",
    },
    {
      role: "user",
      content: "I have been having my eyes on you for a while",
    },
    {
      role: "assistant",
      content: "กูแอบชอบมึงมานานแล้ว ไอเหี้ย",
    },
    {
      role: "user",
      content: sentence,
    },
  ];
  return chatCompletionMessage;
}

function randomOutOfRangeSentence(): string {
  let arr = [
    "พิมพ์ยาวเกินไอ้เหี้ยแปลไม่ไหวแล้ว",
    "เอ้ย! พิมพ์น้อยลงหน่อยนะ แปลไม่รอดแล้วโว้ยยยยย",
  ];
  return arr[Math.floor(Math.random() * arr.length)];
}
