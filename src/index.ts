import { TypedMutationTree } from './trees/mutation-tree';
import { TypedGettersTree } from './trees/getter-tree';
import { TypedActionTree } from './trees/action-tree';
import { CustomState } from './primitives/custom-state';
import { CustomGetters } from './primitives/custom-getters';
import { CustomActions } from './primitives/custom-actions';
import { CustomMutations } from './primitives/custom-mutations';

export type TypedModule<
Namespaced extends boolean = never,
State extends CustomState = never,
RootState extends CustomState = never,
Getters extends CustomGetters = never,
Actions extends CustomActions = never,
Mutations extends CustomMutations = never,
Modules extends TypedModuleTree = never,
> = {
  namespaced?: Namespaced;
  state?: State | (() => State);
  getters?: TypedGettersTree<State, RootState, Getters>;
  actions?: TypedActionTree<State, RootState, Getters, Actions, Mutations>;
  mutations?: TypedMutationTree<State, Mutations>;
  modules?: Modules;
};

export type TypedModuleTree<
M extends {
  [k: string]: TypedModule<any, any, any, any, any, any, any>;
} = {
  [k: string]: TypedModule<any, any, any, any, any, any, any>;
},
> = M;
