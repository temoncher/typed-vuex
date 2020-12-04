export type ConvertToAlias<T> = {
  [K in keyof T]: T[K]
};
