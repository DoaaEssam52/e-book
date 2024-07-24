import { createReducer, on } from '@ngrx/store';

import { AuthState } from '../models/auth-state-model';

import {
  getUserDataRequest,
  clearUserTokenAndData,
  getUserDataRequestSuccess,
  retreiveUserToken,
} from '../actions/auth-action';

const initialAuthState: AuthState = {
  loading: false,
  token: '',
  error: '',
};

export const AuthReducer = createReducer(
  initialAuthState,

  on(retreiveUserToken, (state, { token }) => {
    return { ...state, token };
  }),

  on(getUserDataRequest, (state) => {
    return { ...state, loading: true };
  }),

  on(getUserDataRequestSuccess, (state, { data }) => {
    localStorage.setItem('token', data.accessToken);

    return {
      ...state,
      loading: false,
      token: data.accessToken,
    };
  }),

  on(clearUserTokenAndData, (state) => {
    return {
      ...initialAuthState,
    };
  })
);
