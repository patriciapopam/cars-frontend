import { createAction, props } from '@ngrx/store';
import { User } from '../../../models/User';

export const login = createAction('[Auth] Login', props<{ user: User }>());
export const logout = createAction('[Auth] Logout');
