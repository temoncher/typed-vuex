import { ModuleConfig } from '@/module-config';
import { OmitType } from './omit-type';

export type DeepTraverse<
  M extends Partial<ModuleConfig<any, any, any, any, any, any>>,
  T extends keyof M,
> = M['modules'] extends never
  ? M[T]
  : M['modules'] extends infer Modules
    ? OmitType<{
      [K in keyof Modules]: T extends keyof Modules[K]
        ? DeepTraverse<Modules[K], T>
        : never
    }, never>
    : M[T];
