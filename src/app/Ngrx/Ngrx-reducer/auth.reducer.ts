
import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../Ngrx-actions/auth.actions';
import { User } from 'src/models/User';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({ ...state, user })),
  on(logout, (state) => ({ ...state, user: null }))
);