import { createReducer, on } from '@ngrx/store';

import {
  getMyBasketRequest,
  getMyBasketRequestFail,
  getMyBasketRequestSuccess,
  incrementItemBasketRequest,
  incrementItemBasketRequestFail,
  incrementItemBasketRequestSuccess,
} from '../actions/basket-action';

import { BasketState } from '../models/basket-state-model';

const initialBasketState: BasketState = {
  loading: false,
  error: '',
  _id: '',
  items: [],
  total: 0,
};

export const BasketReducer = createReducer(
  initialBasketState,

  // GET BASKET
  on(getMyBasketRequest, (state) => {
    return { ...state, loading: true };
  }),

  on(getMyBasketRequestSuccess, (state, { _id, items, total }) => {
    return { ...state, loading: false, _id, items: [...items], total };
  }),

  on(getMyBasketRequestFail, (state, action) => {
    return { ...state, loading: false, error: action.error };
  }),

  // INCREMENT ITEM QUANTITY
  on(incrementItemBasketRequest, (state) => {
    return { ...state, loading: true };
  }),

  on(incrementItemBasketRequestSuccess, (state, { items, total }) => {
    return { ...state, loading: false, items: [...items], total };
  }),

  on(incrementItemBasketRequestFail, (state, action) => {
    return { ...state, loading: false, error: action.error };
  })
);
