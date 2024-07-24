import { createReducer, on } from '@ngrx/store';

import { CategoryState } from '../models/category-state-model';

import {
  getCategoriesRequest,
  getCategoriesRequestSuccess,
  getCategoriesRequestFailure,
} from '../actions/categories-action';

const initialCategoriesState: CategoryState = {
  loading: false,
  categories: [],
  error: '',
};

export const CategoriesReducer = createReducer(
  initialCategoriesState,

  on(getCategoriesRequest, (state, action) => {
    return { ...state, loading: true };
  }),

  on(getCategoriesRequestSuccess, (state, action) => {
    return { ...state, loading: false, categories: [...action.categories] };
  }),

  on(getCategoriesRequestFailure, (state, action) => {
    return { ...state, loading: false, error: action.error };
  })
);
