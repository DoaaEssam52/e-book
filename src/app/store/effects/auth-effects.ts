import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap, tap } from 'rxjs';

import {
  clearUserTokenAndData,
  getUserDataRequest,
  getUserDataRequestSuccess,
} from '../actions/auth-action';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../modules/feature/authentication/services/auth.service';

import { State } from '../models/state-model';
import { getMyBasketRequest } from '../actions/basket-action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private _auth: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private _store: Store<State>
  ) {}

  loadAuth$ = createEffect(() => {
    return this.actions.pipe(
      ofType(getUserDataRequest),
      switchMap(({ email, password }) => {
        return this._auth.login({ email, password }).pipe(
          map((res) => {
            return getUserDataRequestSuccess(res);
          })
        );
      })
    );
  });

  handleSuccessLogin$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(getUserDataRequestSuccess),
        tap(() => {
          this._store.dispatch(getMyBasketRequest());

          this._snackBar.open('Successfully login', 'close', {
            duration: 3000,
          });
          this.router.navigateByUrl('home');
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(clearUserTokenAndData),
        tap(() => {
          localStorage.removeItem('token');

          this._snackBar.open('Successfully Logged out', 'close', {
            duration: 3000,
          });

          this.router.navigateByUrl('auth/login');
        })
      ),
    { dispatch: false }
  );
}
