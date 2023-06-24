import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from "openai";

type Data = {
    name: string
  }
  
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    res.status(200).json({ name: 'Word of The Days' })
  }
  