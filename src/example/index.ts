import { TypedModule } from '@/modules';
import { authAccountActions, AuthAccountActions } from './auth-account.actions';
import { authAccountGetters, AuthAccountGetters } from './auth-account.getters';
import { authAccountMutations, AuthAccountMutations } from './auth-account.mutations';
import { getAuthAccountInitialState, AuthAccountState } from './auth-account.state';
import { RootState } from './root.state';

export const account: TypedModule<
AuthAccountState,
RootState,
AuthAccountGetters,
AuthAccountActions,
AuthAccountMutations
> = {
  namespaced: true,
  state: getAuthAccountInitialState(),
  getters: authAccountGetters,
  actions: authAccountActions,
  mutations: authAccountMutations,
};
