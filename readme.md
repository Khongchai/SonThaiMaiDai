# For Internal Use Only

# Features

1. Input any language and output gibberish in Thai.

`/api/translate`

```ts
interface TranslateRequest {
    input: string; // max length 50 I'm poor :(
    langauge: CountryCodeEnum; // https://gist.github.com/kyranjamie/646386d5edc174e8b549111572897f81
}

interface TranslateResponse {
    output: string;
}
```

// To be continued.
`/api/`