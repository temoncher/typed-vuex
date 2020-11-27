import { TypedActionTree } from '@/action-tree';
import { AuthAccountModuleConfig } from './auth-account.types';

export const authAccountActions: TypedActionTree<AuthAccountModuleConfig> = {
  login: async ({ commit, dispatch }, { username, password }) => {
    commit('');
  },

  updateUserData: ({ commit, getters }, userData) => {
    const some = getters.isUserOfficeDirector;

    commit('setLoadingStatus', some && userData ? 'loading' : 'error');
  },

  logout: async ({ dispatch }) => {},

  getUserProjects: async ({ commit }) => { },
};
