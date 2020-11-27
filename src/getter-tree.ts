import { MappedReturnType } from './utils/mapped-return-type';
import { CustomState, CustomGetter } from './primitives';

export type TypedGettersTree<
State extends CustomState = CustomState,
RootState extends CustomState = CustomState,
Getters extends { [k: string]: CustomGetter } = { [k: string]: CustomGetter },
> = {
  [K in keyof Getters]: (
    state: State,
    getters: MappedReturnType<Getters>,
    rootState: RootState,
    rootGetters: any,
  ) => ReturnType<Getters[K]>
};
