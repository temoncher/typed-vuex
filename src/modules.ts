import { ModuleConfig, CustomState } from './primitives';
import { TypedMutationTree } from './mutation-tree';
import { TypedGettersTree } from './getter-tree';
import { TypedActionTree } from './action-tree';

export type TypedModule<Module = any> = Module extends ModuleConfig<
/* eslint-disable @typescript-eslint/no-unused-vars */
infer State,
infer _RootState,
infer _Getters,
infer _Actions,
infer _Mutations,
infer Modules
/* eslint-enable */
> ? {
    namespaced?: boolean;
    state?: State | (() => State);
    getters?: TypedGettersTree<Module>;
    actions?: TypedActionTree<Module>;
    mutations?: TypedMutationTree<Module>;
    modules?: Modules;
  } : {
    namespaced?: boolean;
    state?: CustomState | (() => CustomState);
    getters?: TypedGettersTree;
    actions?: TypedActionTree;
    mutations?: TypedMutationTree;
    modules?: { [k: string]: TypedModule };
  };
