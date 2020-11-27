import { RootState } from '@/example/root.state';
import { TypedModule } from '@/module';
import { AuthAccountModuleConfig } from './auth-account.types';

export type AuthAccountModule = TypedModule<AuthAccountModuleConfig, RootState>;
