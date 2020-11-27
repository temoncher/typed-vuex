import { TypedActionContext } from '@/context';
import { DefaultModuleConfig, DefaultRootConfig } from '@/defaults';
import { WithContext } from '@/utils/with-context';

export type TypedActionTree<
  Config extends DefaultModuleConfig = DefaultModuleConfig,
  RootConfig extends DefaultRootConfig = DefaultRootConfig,
> = WithContext<
Config['actions'],
TypedActionContext<Config, RootConfig>
>;
