import { TypedMutationTree } from './trees/mutation-tree';
import { TypedGettersTree } from './trees/getter-tree';
import { TypedActionTree } from './trees/action-tree';
import { OmitType } from './utils/omit-type';
import { DefaultModuleConfig, DefaultRootConfig } from './defaults';
import { IsAny } from './utils/is-any';

type TypedModuleField<T, R> = IsAny<T> extends true
  ? any
  : T extends never
    ? never
    : R;

export type TypedModule<
  Config extends DefaultModuleConfig = DefaultModuleConfig,
  RootConfig extends DefaultRootConfig = DefaultRootConfig,
> = OmitType<{
  namespaced: TypedModuleField<Config['namespaced'], Config['namespaced']>;
  state: TypedModuleField<
  Config['state'],
  Config['state'] | (() => Config['state'])
  >;
  getters: TypedModuleField<
  Config['getters'],
  TypedGettersTree<Config, RootConfig>
  >;
  actions: TypedModuleField<
  Config['actions'],
  TypedActionTree<Config, RootConfig>
  >;
  mutations: TypedModuleField<
  Config['mutations'],
  TypedMutationTree<Config>
  >;
  modules: TypedModuleField<
  Config['modules'],
  { [K in keyof Config['modules']]: TypedModule<Config['modules'][K], RootConfig> }
  >;
}, never>;
