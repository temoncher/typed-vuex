export type WithContext<
  T extends Record<string, (...parameters: any) => any>,
  C,
> = {
  [K in keyof T]: (
    context: C,
    ...parameters: Parameters<T[K]>
  ) => ReturnType<T[K]>
};
