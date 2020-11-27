import { TypedModule } from '@/modules';
import { authAccountActions } from './auth-account.actions';
import { authAccountGetters } from './auth-account.getters';
import { authAccountMutations } from './auth-account.mutations';
import { AuthAccountModuleConfig, AuthAccountState } from './auth-account.types';

export const getAuthAccountInitialState = (): AuthAccountState => ({
  status: null,
  user: { name: 'John Doe' },
  userProjects: [],
});

export const account: TypedModule<AuthAccountModuleConfig> = {
  namespaced: true,
  state: getAuthAccountInitialState(),
  getters: authAccountGetters,
  actions: authAccountActions,
  mutations: authAccountMutations,
};
