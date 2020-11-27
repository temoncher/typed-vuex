export type InferState<T> = T extends () => infer State
  ? State
  : T;
