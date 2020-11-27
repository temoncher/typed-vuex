import { ModuleConfig } from '@/module-config';
import { AuthModuleConfig } from './auth/auth.types';

export type RootModuleConfig = ModuleConfig<
never,
never,
never,
never,
never,
{ auth: AuthModuleConfig }
>;
