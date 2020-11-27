import { TypedModule } from '@/index';
import { RootState } from './root.state';
import { AuthModule } from './auth/auth.types';

export type RootModule = TypedModule<
false,
RootState,
RootState,
never,
never,
never,
{ auth: AuthModule }
>;
