import { Dispatch } from 'vuex';
import { ModuleConfig } from './primitives';
import { Promisify } from './utils/promisify';

export type DefaultAction = (type: string, payload?: any) => Promise<any>;

export type Action<Module = undefined> = Module extends undefined
  ? DefaultAction
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer _State,
  infer _RootState,
  infer _Getters,
  infer Actions,
  infer _Mutations
  /* eslint-enable */
  > ? <T extends keyof Actions = string>(
    type: T,
    payload?: Parameters<Actions[T]>[0]
  ) => Promisify<ReturnType<Actions[T]>>
    : DefaultAction;

export type DefaultActionWithType = (payloadWithType: { type: string; payload: any }) => any;

export type ActionWithType<Module = undefined> = Module extends undefined
  ? DefaultActionWithType
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer _State,
  infer _RootState,
  infer _Getters,
  infer Actions,
  infer _Mutations
  /* eslint-enable */
  > ? <T extends keyof Actions = string>(
    payloadWithType: { type: T; payload: Parameters<Actions[T]>[0] }
  ) => Promisify<ReturnType<Actions[T]>>
    : DefaultActionWithType;

export type DefaultGlobalAction = (
  type: string,
  payload: any,
  options: { root: true },
) => any;

export type GlobalAction<Module = undefined> = Module extends undefined
  ? DefaultGlobalAction
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer _State,
  infer _RootState,
  infer _Getters,
  infer Actions,
  infer _Mutations
  /* eslint-enable */
  > ? <T extends keyof Actions = string>(
    type: string,
    payload: Parameters<Actions[T]>[0],
    options: { root: true },
  ) => Promisify<ReturnType<Actions[T]>>
    : DefaultGlobalAction;

export type DefaultGlobalActionWithType = (
  payloadWithType: { type: string; payload: any},
  options: { root: true },
) => any;

export type GlobalActionWithType<Module = undefined> = Module extends undefined
  ? DefaultGlobalActionWithType
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer _State,
  infer _RootState,
  infer _Getters,
  infer Actions,
  infer _Mutations
  /* eslint-enable */
  > ? <T extends keyof Actions = string>(
    payloadWithType: { type: T; payload: Parameters<Actions[T]>[0]},
    options: { root: true },
  ) => Promisify<ReturnType<Actions[T]>>
    : DefaultGlobalActionWithType;

export type TypedModuleAction<T> = Action<T>
| ActionWithType<T>
| GlobalAction<T>
| GlobalActionWithType<T>;

export type DefaultDispatch = Dispatch;

export type TypedDispatch<Module = undefined> = Module extends undefined
  ? DefaultDispatch
  : TypedModuleAction<Module>;
