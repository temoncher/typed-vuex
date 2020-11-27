import {
  CustomState,
  CustomGetter,
  CustomAction,
  CustomMutation,
} from './primitives';
import { TypedMutationTree } from './mutation-tree';
import { TypedGettersTree } from './getter-tree';
import { TypedActionTree } from './action-tree';

export type TypedModule<
State extends CustomState = CustomState,
RootState extends CustomState = CustomState,
Getters extends { [k: string]: CustomGetter } = { [k: string]: CustomGetter },
Actions extends { [k: string]: CustomAction } = { [k: string]: CustomAction },
Mutations extends { [k: string]: CustomMutation } = { [k: string]: CustomMutation },
Modules = { [k: string]: TypedModule },
> = {
  namespaced?: boolean;
  state?: State | (() => State);
  getters?: TypedGettersTree<State, RootState, Getters>;
  actions?: TypedActionTree<State, RootState, Getters, Actions, Mutations>;
  mutations?: TypedMutationTree<State, Mutations>;
  modules?: Modules;
};
