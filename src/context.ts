import { TypedDispatch } from './dispatch';
import { CustomState, ModuleConfig } from './primitives';
import { MappedReturnType } from './utils/mapped-return-type';
import { TypedCommit } from './commit';

export type DefaultActionContext = {
  commit: TypedDispatch;
  dispatch: TypedDispatch;
  state: CustomState;
  getters: { [k: string]: any };
  rootState: CustomState;
  rootGetters: { [k: string]: any };
};

export type TypedActionContext<Module = undefined> = Module extends undefined
  ? DefaultActionContext
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer State,
  infer RootState,
  infer Getters,
  infer _Actions,
  infer _Mutations
  /* eslint-enable */
  > ? {
      commit: TypedCommit<Module>;
      dispatch: TypedDispatch<Module>;
      state: State;
      getters: MappedReturnType<Getters>;
      rootState: RootState;
      rootGetters: { [k: string]: any };
    } : DefaultActionContext;
