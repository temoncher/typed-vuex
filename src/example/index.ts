import { RootModule } from './root.types';
import { auth } from './auth';

export const rootModule: RootModule = {
  modules: {
    auth,
  },
};
