import { ModuleConfig } from '@/module-config';
import { AuthAccountModuleConfig } from './auth-account/auth-account.types';

export type AuthModuleConfig = ModuleConfig<
true,
never,
never,
never,
never,
{ account: AuthAccountModuleConfig }
>;
