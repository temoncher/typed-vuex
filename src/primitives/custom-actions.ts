export type CustomAction<P = any, R = any> = (payload: P) => R;

export type CustomActions<
  A extends { [k: string]: CustomAction } = { [k: string]: CustomAction },
> = A;
