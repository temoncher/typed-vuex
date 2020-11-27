import { IUser, IProject } from '@/example/models';

export type AuthAccountState = {
  status: 'success' | 'error' | 'loading' | null;
  user: IUser | null;
  userProjects: IProject[];
};

export const getAuthAccountInitialState = (): AuthAccountState => ({
  status: null,
  user: { name: 'John Doe' },
  userProjects: [],
});
