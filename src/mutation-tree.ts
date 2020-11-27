import { WithContext } from './utils/with-context';
import { CustomState, CustomMutation } from './primitives';

export type TypedMutationTree<
State extends CustomState = CustomState,
Mutations extends { [k: string]: CustomMutation } = { [k: string]: CustomMutation },
> = WithContext<Mutations, State>;
