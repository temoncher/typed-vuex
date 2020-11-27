import { TypedModule } from '@/modules';
import { authAccountActions } from './auth-account.actions';
import { authAccountGetters } from './auth-account.getters';
import { authAccountMutations } from './auth-account.mutations';
import { AuthAccountModuleConfig } from './auth-account.types';
import { getAuthAccountInitialState } from './auth-account.state';

export const account: TypedModule<AuthAccountModuleConfig> = {
  namespaced: true,
  state: getAuthAccountInitialState(),
  getters: authAccountGetters,
  actions: authAccountActions,
  mutations: authAccountMutations,
};
