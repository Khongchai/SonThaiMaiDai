// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

type Data = {
  result: string;
};

const sentences = [
  "เหนื่อยแล้วไม่ตอบละะ",
  "กูเหนื่อยมากแล้วไอเหี้ย หยุดถามซักที",
  "ถามอยู่นั่นแหละ!",
  "โอ้ยเมื่อไรจะหยุดถาม!",
  "ไม่รู้โว้ยยยยย",
  "เบื่อ เบื่อ เบื่อ คนนี้ถามเยอะ AI ก็ขี้เกียจเป็นนะ",
  "ถามเราเยอะชอบเราป่าว",
];
function pickSentence() {
  const index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  res.status(200).json({ result: pickSentence() });
}
