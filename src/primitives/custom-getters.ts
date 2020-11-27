export type CustomGetter<R = any> = () => R;

export type CustomGetters<
  G extends { [k: string]: CustomGetter } = { [k: string]: CustomGetter },
> = G;
