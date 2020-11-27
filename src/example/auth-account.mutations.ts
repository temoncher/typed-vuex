import { TypedMutationTree } from '@/mutation-tree';
import { getAuthAccountInitialState } from './auth-account.state';
import { AuthAccountModuleConfig } from './auth-account.types';

export const authAccountMutations: TypedMutationTree<AuthAccountModuleConfig> = {
  setLoadingStatus: (state) => {

  },
  loginSuccess: (state, userData) => {

  },
  loginFailure: (state) => {

  },
  setUserProjects: (state, projects) => {

  },
  resetModuleState: (state) => Object.assign(state, getAuthAccountInitialState()),
};
