import { Commit, CommitOptions } from 'vuex';
import { ModuleConfig } from './primitives';

export type DefaultMutation = (type: string, payload?: any) => any;

export type Mutation<Module = undefined> = Module extends undefined
  ? DefaultMutation
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer _State,
  infer _RootState,
  infer _Getters,
  infer _Actions,
  infer Mutations
  /* eslint-enable */
  > ? <T extends keyof Mutations = string>(
    type: T,
    payload?: Parameters<Mutations[T]>[0]
  ) => ReturnType<Mutations[T]>
    : DefaultMutation;

export type DefaultMutationWithType = (payloadWithType: { type: string; payload: any }) => any;

export type MutationWithType<Module = undefined> = Module extends undefined
  ? DefaultMutationWithType
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer _State,
  infer _RootState,
  infer _Getters,
  infer _Actions,
  infer Mutations
  /* eslint-enable */
  > ? <T extends keyof Mutations = string>(
    payloadWithType: { type: T; payload: Parameters<Mutations[T]>[0] }
  ) => ReturnType<Mutations[T]>
    : DefaultMutationWithType;

export type DefaultGlobalMutation = (
  type: string,
  payload: any,
  options: CommitOptions,
) => any;

export type GlobalMutation<Module = undefined> = Module extends undefined
  ? DefaultGlobalMutation
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer _State,
  infer _RootState,
  infer _Getters,
  infer _Actions,
  infer Mutations
  /* eslint-enable */
  > ? <T extends keyof Mutations = string>(
    type: string,
    payload: Parameters<Mutations[T]>[0],
    options: CommitOptions,
  ) => ReturnType<Mutations[T]>
    : DefaultGlobalMutation;

export type DefaultGlobalMutationWithType = (
  payloadWithType: { type: string; payload: any},
  options: CommitOptions,
) => any;

export type GlobalMutationWithType<Module = undefined> = Module extends undefined
  ? DefaultGlobalMutationWithType
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer _State,
  infer _RootState,
  infer _Getters,
  infer _Actions,
  infer Mutations
  /* eslint-enable */
  > ? <T extends keyof Mutations = string>(
    payloadWithType: { type: T; payload: Parameters<Mutations[T]>[0]},
    options: CommitOptions,
  ) => ReturnType<Mutations[T]>
    : DefaultGlobalMutationWithType;

export type TypedModuleMutation<T> = Mutation<T>
| MutationWithType<T>
| GlobalMutation<T>
| GlobalMutationWithType<T>;

export type DefaultCommit = Commit;

export type TypedCommit<Module = undefined> = Module extends undefined
  ? DefaultCommit
  : TypedModuleMutation<Module>;
