import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next';
export default function customCors(req: NextApiRequest, res: NextApiResponse) {
    console.log("about to call custome cors")
    return req.headers.host?.includes("https://khongchai.github.io/SonThaiMaiDai/")
}