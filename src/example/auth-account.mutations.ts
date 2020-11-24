import { TypedMutationTree } from '@/mutations';
import { getAuthAccountInitialState, AuthAccountState } from './auth-account.state';
import { IUser, IProject } from './models';

export type AuthAccountMutations = {
  setLoadingStatus: () => void;
  loginSuccess: (userData: IUser) => void;
  loginFailure: () => void;
  setUserProjects: (projects: IProject[]) => void;
  resetModuleState: () => void;
};

export const authAccountMutations: TypedMutationTree<AuthAccountState, AuthAccountMutations> = {
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
