import { TypedModule } from '@/module';
import { RootState } from './root.state';
import { RootModuleConfig } from './root.types';

export type RootModule = TypedModule<
RootModuleConfig,
RootState
>;
