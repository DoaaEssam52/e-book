import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getCategoriesRequest,
  getCategoriesRequestSuccess,
  getCategoriesRequestFailure,
} from '../actions/categories-action';

import { catchError, map, of, switchMap } from 'rxjs';

import { BookService } from '../../modules/shared/services/book.service';

@Injectable()
export class CategoriesEffects {
  constructor(private actions: Actions, private _books: BookService) {}

  loadCategories$ = createEffect(() => {
    return this.actions.pipe(
      ofType(getCategoriesRequest),
      switchMap(() => {
        return this._books.getAllCategories().pipe(
          map((res) => {
            return getCategoriesRequestSuccess({ categories: res });
          }),
          catchError((error) => of(getCategoriesRequestFailure({ error })))
        );
      })
    );
  });
}
