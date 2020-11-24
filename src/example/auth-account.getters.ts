import { TypedGettersTree } from '@/getters';
import { AuthAccountState } from './auth-account.state';
import { RootState } from './root.state';

export type AuthAccountGetters = {
  isUserAdmin: () => boolean;
  isUserOfficeDirector: () => boolean;
  isUserOfficeViewer: () => boolean;
  isUserEmployee: () => boolean;
  isUserPV: () => boolean;
};

export const authAccountGetters: TypedGettersTree<
AuthAccountState,
RootState,
AuthAccountGetters
> = {
  isUserAdmin: (state) => Boolean(state.status),
  isUserOfficeDirector: (state, getters) => Boolean(getters.isUserAdmin),
  isUserOfficeViewer: (state, getters, rootState) => Boolean(rootState),
  isUserEmployee: (state, getters, rootState, rootGetters) => Boolean(rootGetters),
  isUserPV: (state) => Boolean(state),
};
