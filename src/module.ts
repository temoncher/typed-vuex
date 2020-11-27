import { TypedMutationTree } from './trees/mutation-tree';
import { TypedGettersTree } from './trees/getter-tree';
import { TypedActionTree } from './trees/action-tree';
import { CustomState } from './primitives/custom-state';
import { ModuleConfig } from './module-config';
import { OmitType } from './utils/omit-type';

type DefaultModuleConfig = ModuleConfig<any, any, any, any, any, any>;

export type TypedModule<
  Config extends DefaultModuleConfig = DefaultModuleConfig,
  RootState extends CustomState = CustomState,
> = OmitType<{
  namespaced: Config['namespaced'];
  state: Config['state'] extends never
    ? never
    : Config['state'] | (() => Config['state']);
  getters: TypedGettersTree<Config['state'], RootState, Config['getters']>;
  actions: TypedActionTree<
  Config['state'],
  RootState,
  Config['getters'],
  Config['actions'],
  Config['mutations']
  >;
  mutations: TypedMutationTree<Config['state'], Config['mutations']>;
  modules: Config['modules'] extends never
    ? never
    : {
      [K in keyof Config['modules']]: TypedModule<Config['modules'][K], RootState>
    };
}, never>;

export type TypedModuleTree<
  M extends {
    [k: string]: Partial<TypedModule<any, any>>;
  } = {
    [k: string]: Partial<TypedModule<any, any>>;
  },
> = M;
