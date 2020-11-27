import { DispatchOptions } from 'vuex';
import { Promisify } from './utils/promisify';
import { CustomActions } from './primitives/custom-actions';

export type TypedDispatch<
  Actions extends CustomActions = CustomActions,
> = {
  // Action
  <T extends keyof Actions = string>(
    type: T,
    payload?: Parameters<Actions[T]>[0]
  ): Promisify<ReturnType<Actions[T]>>;

  // Action with `type` in the payload
  <T extends keyof Actions = string>(
    payloadWithType: { type: T; payload: Parameters<Actions[T]>[0] }
  ): Promisify<ReturnType<Actions[T]>>;

  // Global action
  <T extends keyof Actions = string>(
    type: string,
    payload: Parameters<Actions[T]>[0],
    options: DispatchOptions,
  ): Promisify<ReturnType<Actions[T]>>;

  // Global action with `type` in the payload
  <T extends keyof Actions = string>(
    payloadWithType: { type: T; payload: Parameters<Actions[T]>[0]},
    options: DispatchOptions,
  ): Promisify<ReturnType<Actions[T]>>;
};
