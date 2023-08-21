import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
// import { AuthService } from './auth.service'; // Your authentication service

@Injectable()
export class AuthEffects {
  //   login$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType('[Auth] Login'),
  //       mergeMap((action) =>
  //         this.authService.login(action.user).pipe(
  //           map((user) => ({ type: '[Auth] Login Success', user })),
  //           catchError((error) => of({ type: '[Auth] Login Failure', error }))
  //         )
  //        )
  //     )
  //   );
  //   // private authService: AuthService
  //   constructor(private actions$: Actions) {}
}
