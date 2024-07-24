import { createAction, props } from '@ngrx/store';

import { Login } from './../../modules/feature/authentication/models/login-model';
import { LoginResponse } from 'src/app/modules/feature/authentication/models/login-response-model';

// export const initCart = createAction('INITIALIZE_CART');

export const retreiveUserToken = createAction(
  'RETREIVE_USER_TOKEN_FROM_LOCAL_STORAGE',
  props<{ token: string }>()
);

export const getUserDataRequest = createAction(
  'GET_USER_DATA_AND_TOKEN',
  props<Login>()
);

export const getUserDataRequestSuccess = createAction(
  'GET_USER_DATA_AND_TOKEN_REQUEST_SUCCESS',
  props<LoginResponse>()
);

export const clearUserTokenAndData = createAction('CLEAR_USER_DATA_AND_TOKEN');
