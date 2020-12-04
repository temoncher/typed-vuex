import { RootConfig } from '@/example/root.config';
import { TypedModule } from '@/module';
import { AuthAccountModuleConfig } from './auth-account.types';

export type AuthAccountModule = TypedModule<AuthAccountModuleConfig, RootConfig>;
