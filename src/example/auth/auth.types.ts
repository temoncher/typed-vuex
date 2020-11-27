import { TypedModule } from '@/index';
import { RootState } from '../root.state';
import { AuthAccountModule } from './auth-account/auth-account.types';
import { AuthState } from './auth.state';

export type AuthModule = TypedModule<
true,
AuthState,
RootState,
never,
never,
never,
{ account: AuthAccountModule }
>;
