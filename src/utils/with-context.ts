export type WithContext<
  T extends { [k: string]: (...parameters: any) => any },
  C,
> = {
  [K in keyof T]: (
    context: C,
    ...parameters: Parameters<T[K]>
  ) => ReturnType<T[K]>
};
