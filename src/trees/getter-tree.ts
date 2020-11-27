import { CustomState } from '@/primitives/custom-state';
import { CustomGetters } from '@/primitives/custom-getters';
import { MappedReturnType } from '../utils/mapped-return-type';

export type TypedGettersTree<
  State extends CustomState = CustomState,
  RootState extends CustomState = CustomState,
  Getters extends CustomGetters = CustomGetters,
> = {
  [K in keyof Getters]: (
    state: State,
    getters: MappedReturnType<Getters>,
    rootState: RootState,
    rootGetters: any,
  ) => ReturnType<Getters[K]>
};
