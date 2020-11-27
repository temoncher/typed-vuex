import { ModuleConfig } from './primitives';
import { WithContext } from './utils/with-context';
import { TypedActionContext } from './context';

export type DefaultActionTree = WithContext<
{ [k: string]: (...parameters: any) => any },
TypedActionContext
>;

export type TypedActionTree<Module = undefined> = Module extends undefined
  ? DefaultActionTree
  : Module extends ModuleConfig<
  /* eslint-disable @typescript-eslint/no-unused-vars */
  infer _State,
  infer _RootState,
  infer _Getters,
  infer Actions,
  infer _Mutations
  /* eslint-enable */
  > ? WithContext<Actions, TypedActionContext<Module>>
    : DefaultActionTree;
