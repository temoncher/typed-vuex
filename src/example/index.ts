import { RootModule } from './root.module';
import { auth } from './auth';

export const rootModule: RootModule = {
  modules: {
    auth,
  },
};
