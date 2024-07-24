import { createAction, props } from '@ngrx/store';

import { Book } from '../../modules/shared/models/book.model';

export const getBooksRequest = createAction('GET_BOOKS_REQUEST');

export const getBooksRequestSuccess = createAction(
  'GET_BOOKS_REQUEST_SUCCESS',
  props<{ books: Book[] }>()
);

export const getBooksRequestFailure = createAction(
  'GET_BOOKS_REQUEST_FAILURE',
  props<{ error: string }>()
);
