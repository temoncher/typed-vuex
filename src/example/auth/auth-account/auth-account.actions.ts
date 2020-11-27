import { AuthAccountModule } from './auth-account.module';

export const authAccountActions: AuthAccountModule['actions'] = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: async ({ commit, dispatch }, { username, password }) => {
    commit('auth/account/setUserProjects');
    await dispatch('login');
  },

  updateUserData: ({ commit, getters }, userData) => {
    const some = getters.isUserOfficeDirector;
    commit('loginFailure', undefined, { root: false });

    commit('setLoadingStatus', some && userData ? 'loading' : 'error');
  },

  logout: async (context) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const something = context.rootGetters['auth/account/isUserOfficeViewer'];
    await Promise.resolve();
  },

  getUserProjects: async () => { },
};
