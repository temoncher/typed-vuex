import { TypedDispatch } from './dispatch';
import { MappedReturnType } from './utils/mapped-return-type';
import { TypedCommit } from './commit';
import { DefaultModuleConfig, DefaultRootConfig } from './defaults';

export type TypedActionContext<
Config extends DefaultModuleConfig = DefaultModuleConfig,
RootConfig extends DefaultRootConfig = DefaultRootConfig,
> = {
  commit: TypedCommit<Config['mutations'], RootConfig['mutations']>;
  dispatch: TypedDispatch<Config['actions']>;
  state: Config['state'];
  getters: MappedReturnType<Config['getters']>;
  rootState: RootConfig['state'];
  rootGetters: RootConfig['getters'];
};
