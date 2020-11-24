import { TypedActionTree } from '@/actions';
import { IUser } from './models';
import { AuthAccountMutations } from './auth-account.mutations';
import { RootState } from './root.state';
import { AuthAccountState } from './auth-account.state';
import { AuthAccountGetters } from './auth-account.getters';

export type AuthAccountActions = {
  login: (payload: { username: string; password: string }) => Promise<void>;
  updateUserData: (userData: IUser) => void;
  logout: () => Promise<void>;
  getUserProjects: () => Promise<void>;
};

export const authAccountActions: TypedActionTree<
AuthAccountState,
RootState,
AuthAccountGetters,
AuthAccountActions,
AuthAccountMutations
> = {
  login: async ({ commit, dispatch }, { username, password }) => {
    commit('loginSuccess');
  },

  updateUserData: ({ commit }, userData) => {},

  logout: async ({ dispatch }) => {},

  getUserProjects: async ({ commit }) => { },
};
