export type CommonResponse = {
  thaiWord: string;
  engWord: string;
  error?: never;
} | {
  thaiWord?: never;
  engWord?: never;
  error: {
    message: string
  }
};