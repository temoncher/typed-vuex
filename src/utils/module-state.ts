import { TypedModule } from '../module';

export type ModuleState<
  M extends Partial<TypedModule<any, any, any, any, any, any, any>>,
> = M['modules'] extends never
  ? M['state']
  : M['modules'] extends infer Modules
    ? { [K in keyof Modules]: ModuleState<Modules[K]> }
    : M['state'];
