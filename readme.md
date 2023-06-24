# Welcome to SonThaiMaiDai! 

This site aims to help people become more proficient in Thai through our state-of-the-art AI-backed translator.

frontend: https://khongchai.github.io/SonThaiMaiDai/frontend/index.html

backend: https://son-thai-mai-dai.vercel.app/api

# For Developers

Check your dms for the OpenAI's Api key.

# API Specs

1. POST /api/translate

```ts
interface TranslateRequest {
    sentence: string; // soft-max 50 characters. (ถ้าให้เกิน 50 ได้ 200 ครับแต่จะโดนด่า)
}

interface TranslateResponse {
    sentence: string; // same key as request.
}
```

2. GET /api/ping

```ts
interface PingResponse {
    data: "pong";
}
```

3. GET /api/wordoftheday 

```ts
interface WordOfTheDayResponse {
    thaiWord: string;
    englishWord: string;
}
```

4. GET /api/tired

```ts
interface TiredResponse {
    sentence: string;
}
```
