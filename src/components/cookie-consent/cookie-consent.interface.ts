export interface ConfigInterface {
  title?: string;
  intro?: string;
  nonBlocking?: boolean;
  translations?: object;
  cookieConfig?: Array<object>
}

export interface TranslationsInterface {
  [key: string]: string;
}
