import { CustomState } from './state';
import { CustomGetter, TypedGettersTree } from './getters';
import { CustomAction, TypedActionTree } from './actions';
import { CustomMutation, TypedMutationTree } from './mutations';

export type TypedModule<
  State extends CustomState,
  RootState extends CustomState,
  Getters extends Record<string, CustomGetter>,
  Actions extends Record<string, CustomAction>,
  Mutations extends Record<string, CustomMutation>,
> = {
  namespaced?: boolean;
  state?: State | (() => State);
  getters?: TypedGettersTree<State, RootState, Getters>;
  actions?: TypedActionTree<State, RootState, Getters, Actions, Mutations>;
  mutations?: TypedMutationTree<State, Mutations>;
  modules?: any;
};
