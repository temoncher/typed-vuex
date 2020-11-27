import { TypedGettersTree } from '@/getter-tree';
import { AuthAccountModuleConfig } from './auth-account.types';

export const authAccountGetters: TypedGettersTree<AuthAccountModuleConfig> = {
  isUserAdmin: (state) => Boolean(state.status),
  isUserOfficeDirector: (state, getters) => Boolean(getters.isUserAdmin),
  isUserOfficeViewer: (state, getters, rootState) => Boolean(rootState),
  isUserEmployee: (state, getters, rootState, rootGetters) => Boolean(rootGetters),
  isUserPV: (state) => Boolean(state),
};
