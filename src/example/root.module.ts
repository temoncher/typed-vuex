import { TypedModule } from '@/module';
import { RootConfig } from './root.state';
import { RootModuleConfig } from './root.types';

export type RootModule = TypedModule<
RootModuleConfig,
RootConfig
>;
