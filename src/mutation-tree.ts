import { WithContext } from './utils/with-context';
import { ModuleConfig, CustomState, CustomMutation } from './primitives';

export type TypedMutationTree<Module = any> = Module extends ModuleConfig<
/* eslint-disable @typescript-eslint/no-unused-vars */
infer State,
infer _RootState,
infer _Getters,
infer _Actions,
infer Mutations
/* eslint-enable */
> ? WithContext<Mutations, State>
  : WithContext<{ [k: string]: CustomMutation }, CustomState>;
