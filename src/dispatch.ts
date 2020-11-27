import { Dispatch } from 'vuex';
import { ModuleConfig, CustomAction } from './primitives';
import { Promisify } from './utils/promisify';

export type TypedModuleAction<Actions extends { [k: string]: CustomAction }> = {
  <T extends keyof Actions = string>(
    type: T,
    payload?: Parameters<Actions[T]>[0]
  ): Promisify<ReturnType<Actions[T]>>;
  <T extends keyof Actions = string>(
    payloadWithType: { type: T; payload: Parameters<Actions[T]>[0] }
  ): Promisify<ReturnType<Actions[T]>>;
  <T extends keyof Actions = string>(
    type: string,
    payload: Parameters<Actions[T]>[0],
    options: { root: true },
  ): Promisify<ReturnType<Actions[T]>>;
  <T extends keyof Actions = string>(
    payloadWithType: { type: T; payload: Parameters<Actions[T]>[0]},
    options: { root: true },
  ): Promisify<ReturnType<Actions[T]>>;
};

export type DefaultDispatch = Dispatch;

export type TypedDispatch<Module = undefined> = Module extends undefined
  ? DefaultDispatch
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer _State,
  infer _RootState,
  infer _Getters,
  infer Actions,
  infer _Mutations
  /* eslint-enable */
  > ? TypedModuleAction<Actions>
    : DefaultDispatch;
