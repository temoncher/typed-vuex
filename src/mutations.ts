import { CustomState } from './state';
import { WithContext } from './utils/with-context';

export type CustomMutation = (payload: any) => void;

export type TypedMutationTree<
  State extends CustomState,
  Mutations extends Record<string, CustomMutation>,
> = WithContext<Mutations, State>;
