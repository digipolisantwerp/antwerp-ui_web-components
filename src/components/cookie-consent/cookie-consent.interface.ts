export interface ConfigInterface {
  title?: string;
  intro?: string;
  cookiePolicy?: string;
  nonBlocking?: boolean;
  translations?: object;
  cookieConfig?: Array<object>
}

export interface TranslationsInterface {
  [key: string]: string;
}
