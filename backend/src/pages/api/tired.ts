// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  sentence: string;
};

const sentences = [
  "เหนื่อยแล้วไม่ตอบละะ",
  "กูเหนื่อยมากแล้วไอเหี้ย หยุดถามซักที",
  "ถามอยู่นั่นแหละ!",
  "โอ้ยเมื่อไรจะหยุดถาม!",
];
function pickSentence() {
  const index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ sentence: pickSentence() });
}
