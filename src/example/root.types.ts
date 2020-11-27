import { TypedModule } from '@/module';
import { RootState } from './root.state';
import { AuthModule } from './auth/auth.types';

export type RootModule = TypedModule<
RootState,
RootState,
{ [k: string]: never },
{ [k: string]: never },
{ [k: string]: never },
{ auth: AuthModule }
>;
