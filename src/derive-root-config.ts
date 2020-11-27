import { DefaultModuleConfig } from './defaults';
import { DeepTraverse } from './utils/deep-traverse';
import { Leaves } from './utils/leaves';
import { OutputType } from './utils/output-type';

export type DeriveRootConfig<
  M extends Partial<DefaultModuleConfig>,
> = {
  state: DeepTraverse<M, 'state'>;
  getters: {
    [K in Leaves<DeepTraverse<M, 'getters'>>]: OutputType<
    DeepTraverse<M, 'getters'>, K
    > extends infer G
      ? G extends (...parameters: any) => any
        ? ReturnType<G>
        : never
      : never;
  };
  mutations: {
    [K in Leaves<DeepTraverse<M, 'mutations'>>]: OutputType<
    DeepTraverse<M, 'mutations'>, K
    >
  };
  actions: {
    [K in Leaves<DeepTraverse<M, 'actions'>>]: OutputType<
    DeepTraverse<M, 'actions'>, K
    >
  };
};
