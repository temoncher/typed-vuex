import { CommitOptions } from 'vuex';
import { CustomMutations } from './primitives/custom-mutations';

type OptionsWithRoot<V extends true | false> = V extends true
  ? Omit<CommitOptions, 'root'> & { root: true }
  : Omit<CommitOptions, 'root'> & { root?: false };

type DeriveMutationType<
  T extends keyof Mutations | keyof RootMutations,
  Mutations extends CustomMutations,
  RootMutations extends CustomMutations,
> = T extends keyof Mutations
  ? Mutations[T]
  : T extends keyof RootMutations
    ? RootMutations[T]
    : never;

export type TypedCommit<
  Mutations extends CustomMutations,
  RootMutations extends CustomMutations,
> = {
  // Mutation
  <T extends keyof Mutations | keyof RootMutations = string>(
    type: T,
    payload?: Parameters<DeriveMutationType<T, Mutations, RootMutations>>[0],
    options?: T extends keyof Mutations ? OptionsWithRoot<false> : OptionsWithRoot<true>,
  ): ReturnType<DeriveMutationType<T, Mutations, RootMutations>>;

  // Mutation with `type` in the payload
  <T extends keyof Mutations | keyof RootMutations = string>(
    payloadWithType: {
      type: T;
      payload?: Parameters<DeriveMutationType<T, Mutations, RootMutations>>[0];
    },
    options?: T extends keyof Mutations ? OptionsWithRoot<false> : OptionsWithRoot<true>,
  ): ReturnType<DeriveMutationType<T, Mutations, RootMutations>>;
};
