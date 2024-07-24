import { createReducer, on } from '@ngrx/store';

import { BooksState } from '../models/books-state-model';

import {
  getBooksRequest,
  getBooksRequestSuccess,
  getBooksRequestFailure,
} from '../actions/books-action';

const initialBooksState: BooksState = {
  loading: false,
  books: [],
  error: '',
};

export const BooksReducer = createReducer(
  initialBooksState,

  on(getBooksRequest, (state, action) => {
    return { ...state, loading: true };
  }),

  on(getBooksRequestSuccess, (state, action) => {
    return { ...state, loading: false, books: [...action.books] };
  }),

  on(getBooksRequestFailure, (state, action) => {
    return { ...state, loading: false, error: action.error };
  })
);
