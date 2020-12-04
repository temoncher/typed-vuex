import { DefaultModuleConfig } from './defaults';
import { DeepTraverse } from './utils/deep-traverse';
import { Leaves } from './utils/leaves';
import { OutputType } from './utils/output-type';
import { Unreachable } from './utils/unreachable';

type LeavesToOutput<O extends { [k: string]: any }> = {
  [K in Leaves<O, '/'>]: OutputType<O, K>;
};

type LeavesToReturnType<
 Getters extends { [k: string]: any },
> = {
  [K in Leaves<Getters, '/'>]: OutputType<
  Getters, K
  > extends infer G
    ? G extends (...parameters: any) => any
      ? ReturnType<G>
      : never
    : never;
};

export type DeriveRootConfig<
  M extends Partial<DefaultModuleConfig>,
> = {
  state: DeepTraverse<M, 'state'>;
  getters: DeepTraverse<M, 'getters'> extends infer Getters
    ? LeavesToReturnType<Getters>
    : Unreachable;
  mutations: DeepTraverse<M, 'mutations'> extends infer Mutations
    ? LeavesToOutput<Mutations>
    : Unreachable;
  actions: DeepTraverse<M, 'actions'> extends infer Actions
    ? LeavesToOutput<Actions>
    : Unreachable;
};
