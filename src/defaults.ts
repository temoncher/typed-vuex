import { ModuleConfig } from './module-config';
import { CustomState } from './primitives/custom-state';

export type DefaultModuleConfig = ModuleConfig<any, any, any, any, any, any>;
export type DefaultRootConfig = {
  state: CustomState;
  getters: {
    [k: string]: any;
  };
  mutations: {
    [k: string]: (payload: any) => void;
  };
  actions: {
    [k: string]: (payload: any) => any;
  };
};
