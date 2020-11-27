import { CommitOptions } from 'vuex';
import { CustomMutation } from './primitives';

export type TypedCommit<
Mutations extends { [k: string]: CustomMutation } = { [k: string]: CustomMutation },
> = {
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
