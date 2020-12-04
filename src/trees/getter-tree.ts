import { DefaultModuleConfig, DefaultRootConfig } from '@/defaults';
import { MappedReturnType } from '../utils/mapped-return-type';

export type TypedGettersTree<
  Config extends DefaultModuleConfig,
  RootConfig extends DefaultRootConfig,
> = {
  [K in keyof Config['getters']]: (
    state: Config['state'],
    getters: MappedReturnType<Config['getters']>,
    rootState: RootConfig['state'],
    rootGetters: RootConfig['getters'],
  ) => ReturnType<Config['getters'][K]>
};
