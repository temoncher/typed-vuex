import { CustomState } from './primitives/custom-state';
import { CustomGetters } from './primitives/custom-getters';
import { CustomActions } from './primitives/custom-actions';
import { CustomMutations } from './primitives/custom-mutations';

export type ModuleConfig<
  Namespaced extends boolean = never,
  State extends CustomState = never,
  Getters extends CustomGetters = never,
  Actions extends CustomActions = never,
  Mutations extends CustomMutations = never,
  Modules extends ModuleConfigTree = never,
> = {
  namespaced: Namespaced;
  state: State;
  getters: Getters;
  actions: Actions;
  mutations: Mutations;
  modules: Modules;
};

export type ModuleConfigTree<
  M extends {
    [k: string]: Partial<ModuleConfig<any, any, any, any, any, any>>;
  } = {
    [k: string]: Partial<ModuleConfig<any, any, any, any, any, any>>;
  },
> = M;
