import { createAction, props } from '@ngrx/store';

import { Category } from '../../modules/shared/models/category.model';

export const getCategoriesRequest = createAction('GET_CATEGORIES_REQUEST');

export const getCategoriesRequestSuccess = createAction(
  'GET_CATEGORIES_REQUEST_SUCCESS',
  props<{ categories: Category[] }>()
);

export const getCategoriesRequestFailure = createAction(
  'GET_CATEGORIES_REQUEST_FAILURE',
  props<{ error: string }>()
);
