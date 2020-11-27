import { Commit, CommitOptions } from 'vuex';
import { ModuleConfig, CustomMutation } from './primitives';

export type TypedModuleMutation<Mutations extends { [k: string]: CustomMutation }> = {
  // Mutation
  <T extends keyof Mutations = string>(
    type: T,
    payload?: Parameters<Mutations[T]>[0]
  ): ReturnType<Mutations[T]>;

  // Mutation with `type` in the payload
  <T extends keyof Mutations = string>(
    payloadWithType: { type: T; payload: Parameters<Mutations[T]>[0] }
  ): ReturnType<Mutations[T]>;

  // Global mutation
  <T extends keyof Mutations = string>(
    type: string,
    payload: Parameters<Mutations[T]>[0],
    options: CommitOptions,
  ): ReturnType<Mutations[T]>;

  // Global mutation with `type` in the payload
  <T extends keyof Mutations = string>(
    payloadWithType: { type: T; payload: Parameters<Mutations[T]>[0]},
    options: CommitOptions,
  ): ReturnType<Mutations[T]>;
};

export type DefaultCommit = Commit;

export type TypedCommit<Module = undefined> = Module extends undefined
  ? DefaultCommit
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer _State,
  infer _RootState,
  infer _Getters,
  infer _Actions,
  infer Mutations
  /* eslint-enable */
  > ? TypedModuleMutation<Mutations>
    : DefaultCommit;
