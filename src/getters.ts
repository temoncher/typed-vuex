import { WithContext } from './utils/with-context';
import { MappedReturnType } from './utils/mapped-return-type';
import { CustomState } from './state';

export type CustomGetter = () => any;

export type TypedGettersTree<
  State extends CustomState,
  RootState extends CustomState,
  Getters extends Record<string, CustomGetter>,
> = {
  [K in keyof Getters]: (
    state: State,
    getters: MappedReturnType<Getters>,
    rootState: RootState,
    rootGetters: any,
  ) => ReturnType<Getters[K]>
};
