import { AuthModule } from './auth.module';
import { account } from './auth-account';

export const auth: AuthModule = {
  namespaced: true,
  modules: {
    account,
  },
};
