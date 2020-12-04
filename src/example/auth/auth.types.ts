import { ModuleConfig } from '@/module-config';
import { ConvertToAlias } from '@/utils/convert-to-type-alias';
import { AuthAccountModuleConfig } from './auth-account/auth-account.types';

type AuthActions = {
  authorize: () => void;
};

interface IAuthMutations {
  setIsAuthed: (isAuthed: boolean) => void;
}

interface IAuthModuleState {
  isAuthed: boolean;
}

export type AuthModuleConfig = ModuleConfig<
true,
IAuthModuleState,
never,
AuthActions,
ConvertToAlias<IAuthMutations>,
{ account: AuthAccountModuleConfig }
>;
