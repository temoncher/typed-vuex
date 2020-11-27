import { TypedModule } from '@/module';
import { RootState } from '../root.state';
import { AuthModuleConfig } from './auth.types';

export type AuthModule = TypedModule<AuthModuleConfig, RootState>;
