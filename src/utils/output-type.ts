/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-shadow */
type Break<T extends string, D extends string> = T extends `${infer F}${D}${infer _}`
  ? F extends `${infer _}${D}${infer _}`
    ? never
    : T extends `${F}${D}${infer R}`
      ? [F, R]
      : never
  : [T, ''];

export type OutputType<T, K extends string, D extends string = '/'> = string extends K
  ? never
  : string extends D
    ? never
    : string extends keyof T
      ? never
      : K extends ''
        ? T
        : Break<K, D> extends [infer F, infer R]
          ? F extends keyof T
            ? OutputType<T[F], Extract<R, string>, D>
            : never
          : never;
