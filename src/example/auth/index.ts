import { AuthModule } from './auth.types';
import { account } from './auth-account';

export const auth: AuthModule = {
  namespaced: true,
  modules: {
    account,
  },
};
