import { TypedActionContext } from '@/context';
import { DefaultModuleConfig, DefaultRootConfig } from '@/defaults';
import { WithContext } from '@/utils/with-context';

export type TypedActionTree<
  Config extends DefaultModuleConfig,
  RootConfig extends DefaultRootConfig,
> = WithContext<
Config['actions'],
TypedActionContext<Config, RootConfig>
>;
