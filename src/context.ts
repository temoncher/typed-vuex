import { TypedDispatch } from './dispatch';
import { MappedReturnType } from './utils/mapped-return-type';
import { TypedCommit } from './commit';
import { CustomState } from './primitives/custom-state';
import { CustomGetters } from './primitives/custom-getters';
import { CustomActions } from './primitives/custom-actions';
import { CustomMutations } from './primitives/custom-mutations';

export type TypedActionContext<
  State extends CustomState = CustomState,
  RootState extends CustomState = CustomState,
  Getters extends CustomGetters = CustomGetters,
  Actions extends CustomActions = CustomActions,
  Mutations extends CustomMutations = CustomMutations,
> = {
  commit: TypedCommit<Mutations>;
  dispatch: TypedDispatch<Actions>;
  state: State;
  getters: MappedReturnType<Getters>;
  rootState: RootState;
  rootGetters: { [k: string]: any };
};
