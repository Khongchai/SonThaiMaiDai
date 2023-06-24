import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function customCors(req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: ' https://khongchai.github.io/SonThaiMaiDai/*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
}
