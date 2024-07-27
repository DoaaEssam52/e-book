import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Store } from '@ngrx/store';

import { MatSnackBar } from '@angular/material/snack-bar';

import { authSelector } from '../store/selectors/auth-selector';

import { State } from '../store/models/state-model';

import { environment } from '../../environments/environment';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar, private store: Store<State>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const baseUrl = environment.baseUrl;
    let accessToken: any;

    this.store.select(authSelector).subscribe({
      next: (data) => {
        accessToken = data.token;
      },
    });

    let newRequest = request.clone({
      url: baseUrl + '/' + request.url,
      headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(newRequest).pipe(
      catchError((httpError: HttpErrorResponse) => {
        let error = httpError.error.message;

        let errorMessage = error;

        if (Array.isArray(error) && error.length) {
          errorMessage = error[0];
        }

        this._snackBar.open(errorMessage, 'close', {
          duration: 3000,
        });

        return throwError(errorMessage);
      })
    );
  }
}
