export type HasNever<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends never
    ? true
    : HasNever<R>
  : T extends [never]
    ? true
    : false;
