import { DispatchOptions } from 'vuex';
import { CustomAction } from './primitives';
import { Promisify } from './utils/promisify';

export type TypedDispatch<
  Actions extends { [k: string]: CustomAction } = { [k: string]: CustomAction },
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
