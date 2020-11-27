import { TypedModule } from '@/module';
import { RootState } from '../root.state';
import { AuthAccountModule } from './auth-account/auth-account.types';
import { AuthState } from './auth.state';

export type AuthModule = TypedModule<
AuthState,
RootState,
{ [k: string]: never },
{ [k: string]: never },
{ [k: string]: never },
{ account: AuthAccountModule }
>;
