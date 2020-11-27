import { TypedDispatch } from './dispatch';
import { CustomState, ModuleConfig } from './primitives';
import { MappedReturnType } from './utils/mapped-return-type';

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
  infer State,
  infer RootState,
  infer Getters,
  infer Actions,
  infer Actions
  > ? {
      commit: TypedDispatch<Actions>;
      dispatch: TypedDispatch<Actions>;
      state: State;
      getters: MappedReturnType<Getters>;
      rootState: RootState;
      rootGetters: { [k: string]: any };
    } : DefaultActionContext;
