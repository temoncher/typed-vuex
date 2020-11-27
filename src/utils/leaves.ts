type Join<K, P, D extends string = '/'> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : D}${P}`
    : never
  : never;

export type Leaves<
T,
D extends string = '/',
> = T extends { [k: string]: unknown}
  ? { [K in keyof T]-?: Join<K, Leaves<T[K], D>, D> }[keyof T]
  : '';
