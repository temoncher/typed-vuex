import { TypedMutationTree } from './trees/mutation-tree';
import { TypedGettersTree } from './trees/getter-tree';
import { TypedActionTree } from './trees/action-tree';
import { OmitType } from './utils/omit-type';
import { DefaultModuleConfig, DefaultRootConfig } from './defaults';

export type TypedModule<
  Config extends DefaultModuleConfig = DefaultModuleConfig,
  RootConfig extends DefaultRootConfig = DefaultRootConfig,
> = OmitType<{
  namespaced: Config['namespaced'];
  state: Config['state'] extends never
    ? never
    : Config['state'] | (() => Config['state']);
  getters: TypedGettersTree<Config, RootConfig>;
  actions: TypedActionTree<Config, RootConfig>;
  mutations: TypedMutationTree<Config>;
  modules: Config['modules'] extends never
    ? never
    : {
      [K in keyof Config['modules']]: TypedModule<Config['modules'][K], RootConfig>
    };
}, never>;
