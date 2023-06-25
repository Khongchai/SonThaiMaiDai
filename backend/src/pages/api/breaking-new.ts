import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import customCors from "./cors";
import NextCors from "nextjs-cors";

type BreakingNewsResponse = {
  breakingNews : any
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BreakingNewsResponse>,
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

  const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 100,
    messages: [
      {
        role: "system",
        content: `
     You are a ridiculous, useless, silly marketing who generate the content to advertise the SonThaiMaiDai translator.
     You will generate 2 breaking news to persuade customer to use the feature translate to thai and word of the day. The breaking new can include
     the discount of the website , the achevement of the customer who used this website for example : We offer 30% discount if you're from Mars!, 
     "
  
     your output should be 2 breaking news separated each new by "\n" and each element less than 20 words".
  
     Remember, the news should be sth funny, useless and silly.
      `      }]
  });

  const { choices } = chat_completion.data;
  const generatedBreakingNews = choices[0].message?.content;
  console.log(generatedBreakingNews)
  var breakingNewList : Array<string>= generatedBreakingNews?.split("\n")
  const breakingNewListExcludeEmpty = breakingNewList.filter((str) => str !== '');
  // Extracting the first word from the generated response
 const responseData: BreakingNewsResponse = {
    breakingNews : breakingNewListExcludeEmpty 
  };
  res.status(200).json(responseData);
}
