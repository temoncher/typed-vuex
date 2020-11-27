import {
  CustomState,
  CustomGetter,
  CustomAction,
  CustomMutation,
} from './primitives';
import { WithContext } from './utils/with-context';
import { TypedActionContext } from './context';

export type TypedActionTree<
State extends CustomState = CustomState,
RootState extends CustomState = CustomState,
Getters extends { [k: string]: CustomGetter } = { [k: string]: CustomGetter },
Actions extends { [k: string]: CustomAction } = { [k: string]: CustomAction },
Mutations extends { [k: string]: CustomMutation } = { [k: string]: CustomMutation },
> = WithContext<
Actions,
TypedActionContext<State, RootState, Getters, Actions, Mutations>
>;
