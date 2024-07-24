import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  getBooksRequest,
  getBooksRequestFailure,
  getBooksRequestSuccess,
} from '../actions/books-action';
import { getMyBasketRequest } from '../actions/basket-action';

import { catchError, map, of, switchMap } from 'rxjs';

import { BookService } from '../../modules/shared/services/book.service';

import { State } from '../models/state-model';

@Injectable()
export class BooksEffects {
  constructor(
    private actions: Actions,
    private _books: BookService,
    private store: Store<State>
  ) {}

  loadBooks$ = createEffect(() => {
    return this.actions.pipe(
      ofType(getBooksRequest),
      switchMap(() => {
        return this._books.getAllBooks().pipe(
          map((res) => {
            this.store.dispatch(getMyBasketRequest());

            return getBooksRequestSuccess({ books: res.data });
          }),
          catchError((error) => of(getBooksRequestFailure({ error })))
        );
      })
    );
  });
}
