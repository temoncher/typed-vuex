import { MappedReturnType } from './utils/mapped-return-type';
import { ModuleConfig, CustomState } from './primitives';

export type DefaultGettersTree = {
  [k: string]: (
    state: CustomState,
    getters: MappedReturnType<any>,
    rootState: CustomState,
    rootGetters: any,
  ) => any;
};

export type TypedGettersTree<Module = any> = Module extends ModuleConfig<
infer State,
infer RootState,
infer Getters
> ? {
    [K in keyof Getters]: (
      state: State,
      getters: MappedReturnType<Getters>,
      rootState: RootState,
      rootGetters: any,
    ) => ReturnType<Getters[K]>
  } : DefaultGettersTree;
