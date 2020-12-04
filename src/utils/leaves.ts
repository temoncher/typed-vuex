type Join<
  K extends string | number,
  P extends string | number,
  D extends string,
> = `${K}${'' extends P ? '' : D}${P}`;

export type Leaves<
T extends { [k: string]: any },
D extends string,
> = T extends { [k: string]: unknown }
  ? {
    [K in keyof T]-?: K extends string | number
      ? Join<K, Leaves<T[K], D>, D>
      : never
  }[keyof T]
  : '';
