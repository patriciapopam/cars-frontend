import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../Ngrx-reducer/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectCurrentUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);
