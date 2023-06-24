import type { NextApiRequest, NextApiResponse } from "next";
export default function customCors(req: NextApiRequest, res: NextApiResponse) {
  if (process.env.NODE_ENV === "production") {
    console.log("about to call custome cors");
    return req.headers.host?.includes(
      "khongchai.github.io",
    );
  }

  return true;
}
