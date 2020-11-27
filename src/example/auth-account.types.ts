import { TypedModule } from '@/modules';
import { ModuleConfig } from '@/primitives';
import { IUser, IProject } from './models';
import { RootState } from './root.state';
import { AuthAccountState } from './auth-account.state';

export type AuthAccountActions = {
  login: (payload: { username: string; password: string }) => Promise<void>;
  updateUserData: (userData: IUser) => void;
  logout: () => Promise<void>;
  getUserProjects: () => Promise<void>;
};

export type AuthAccountGetters = {
  isUserAdmin: () => boolean;
  isUserOfficeDirector: () => boolean;
  isUserOfficeViewer: () => boolean;
  isUserEmployee: () => boolean;
  isUserPV: () => boolean;
};

export type AuthAccountMutations = {
  setLoadingStatus: (status: 'success' | 'error' | 'loading' | null) => void;
  loginSuccess: (userData: IUser) => void;
  loginFailure: () => void;
  setUserProjects: (projects: IProject[]) => void;
  resetModuleState: () => void;
};

export type AuthAccountModuleConfig = ModuleConfig<
AuthAccountState,
RootState,
AuthAccountGetters,
AuthAccountActions,
AuthAccountMutations
>;
