import { WithContext } from '../utils/with-context';
import { TypedActionContext } from '../context';
import { CustomState } from '@/primitives/custom-state';
import { CustomGetters } from '@/primitives/custom-getters';
import { CustomActions } from '@/primitives/custom-actions';
import { CustomMutations } from '@/primitives/custom-mutations';

export type TypedActionTree<
State extends CustomState = CustomState,
RootState extends CustomState = CustomState,
Getters extends CustomGetters = CustomGetters,
Actions extends CustomActions = CustomActions,
Mutations extends CustomMutations = CustomMutations,
> = WithContext<
Actions,
TypedActionContext<State, RootState, Getters, Actions, Mutations>
>;
