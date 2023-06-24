// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  thaiTranslator: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method == "GET")
  {
    req.query
    res.status(200).json({ thaiTranslator :  'John Doe' })
  }  
  else 
  {
      res.status(200).json({thaiTranslator : "Hello world"})
  }
}
