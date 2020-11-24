import { DispatchOptions, CommitOptions } from 'vuex';
import { CustomMutation } from './mutations';
import { WithContext } from './utils/with-context';
import { CustomState } from './state';
import { MappedReturnType } from './utils/mapped-return-type';
import { CustomGetter } from './getters';

export type CustomAction = (payload: any) => any;

export type TypedCommit<
  Mutations extends Record<string, CustomMutation>,
> = {
  <T extends keyof Mutations>(type: T): ReturnType<Mutations[T]>;
  <T extends keyof Mutations>(
    type: T,
    payload: Parameters<Mutations[T]>[0]
  ): ReturnType<Mutations[T]>;
  <T extends keyof Mutations>(
    type: string,
    payload: Parameters<Mutations[T]>[0],
    options: { root: true },
  ): ReturnType<Mutations[T]>;
};

export type TypedDispatch<
  Actions extends Record<string, CustomAction>,
> = {
  <T extends keyof Actions>(type: T): ReturnType<Actions[T]>;
  <T extends keyof Actions>(
    type: T,
    payload: Parameters<Actions[T]>[0],
  ): ReturnType<Actions[T]>;
  <T extends keyof Actions>(
    type: string,
    payload: Parameters<Actions[T]>[0],
    options: { root: true }
  ): ReturnType<Actions[T]>; // TODO: Promise<any> according to vuex
};

export type TypedActionContext<
  State extends CustomState,
  RootState extends CustomState,
  Getters extends Record<string, CustomGetter>,
  Actions extends Record<string, CustomAction>,
  Mutations extends Record<string, CustomMutation>,
> = {
  commit: TypedCommit<Mutations>;
  dispatch: TypedDispatch<Actions>;
  state: State;
  getters: MappedReturnType<Getters>;
  rootState: RootState;
  rootGetters: any;
};

export type TypedActionTree<
  State extends CustomState,
  RootState extends CustomState,
  Getters extends Record<string, CustomGetter>,
  Actions extends Record<string, CustomAction>,
  Mutations extends Record<string, CustomMutation>,
> = WithContext<Actions, TypedActionContext<State, RootState, Getters, Actions, Mutations>>;
