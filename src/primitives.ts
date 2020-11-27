export type CustomState = { [k: string]: any };

export type CustomMutation = (payload: any) => void;

export type CustomAction = (payload: any) => any;

export type CustomGetter = () => any;

export type ModuleConfig<
State extends CustomState = CustomState,
RootState extends CustomState = CustomState,
Getters extends { [k: string]: CustomGetter } = { [k: string]: CustomGetter },
Actions extends { [k: string]: CustomAction} = { [k: string]: CustomAction},
Mutations extends { [k: string]: CustomMutation} = { [k: string]: CustomMutation},
Modules extends ModuleConfig[] = any,
> = {
  state?: State;
  getters?: Getters;
  actions?: Actions;
  mutations?: Mutations;
  modules?: Modules;
  rootState?: RootState;
};
