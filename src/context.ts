import { TypedDispatch } from './dispatch';
import {
  CustomState,
  CustomGetter,
  CustomAction,
  CustomMutation,
} from './primitives';
import { MappedReturnType } from './utils/mapped-return-type';
import { TypedCommit } from './commit';

export type TypedActionContext<
State extends CustomState = CustomState,
RootState extends CustomState = CustomState,
Getters extends { [k: string]: CustomGetter } = { [k: string]: CustomGetter },
Actions extends { [k: string]: CustomAction } = { [k: string]: CustomAction },
Mutations extends { [k: string]: CustomMutation } = { [k: string]: CustomMutation },
> = {
  commit: TypedCommit<Mutations>;
  dispatch: TypedDispatch<Actions>;
  state: State;
  getters: MappedReturnType<Getters>;
  rootState: RootState;
  rootGetters: { [k: string]: any };
};
