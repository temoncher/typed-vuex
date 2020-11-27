import { CustomState } from '@/primitives/custom-state';
import { CustomMutations } from '@/primitives/custom-mutations';
import { WithContext } from '../utils/with-context';

export type TypedMutationTree<
State extends CustomState = CustomState,
Mutations extends CustomMutations = CustomMutations,
> = WithContext<Mutations, State>;
