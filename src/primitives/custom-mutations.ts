export type CustomMutation<P = any> = (payload: P) => void;

export type CustomMutations<
  M extends { [k: string]: CustomMutation } = { [k: string]: CustomMutation },
> = M;
