import { DefaultModuleConfig } from '@/defaults';
import { WithContext } from '../utils/with-context';

export type TypedMutationTree<
Config extends DefaultModuleConfig = DefaultModuleConfig,
> = WithContext<Config['mutations'], Config['state']>;
