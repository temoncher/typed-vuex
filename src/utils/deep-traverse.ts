import { DefaultModuleConfig } from '@/defaults';
import { IsAny } from './is-any';
import { OmitType } from './omit-type';
import { Unreachable } from './unreachable';
import { IsNever } from './is-never';

type ExtractField<
  M extends Partial<DefaultModuleConfig>,
  T extends keyof DefaultModuleConfig,
> = T extends keyof M
  ? IsNever<M[T]> extends true
    ? unknown
    : M[T]
  : unknown;

export type DeepTraverse<
  M extends Partial<DefaultModuleConfig>,
  T extends keyof DefaultModuleConfig,
> = IsAny<M> extends true
  ? any
  : IsNever<M> extends true
    ? never
    : M['modules'] extends infer Modules
      ? IsNever<Modules> extends true
        ? M[T]
        : OmitType<{
          [K in keyof Modules]: T extends keyof Modules[K]
            ? DeepTraverse<Modules[K], T>
            : never
        }, never> extends infer ModuleTree
          ? ExtractField<M, T> & ModuleTree
          : Unreachable
      : Unreachable;
