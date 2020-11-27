import { CommitOptions } from 'vuex';
import { CustomMutations } from './primitives/custom-mutations';

export type TypedCommit<
Mutations extends CustomMutations = CustomMutations,
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
