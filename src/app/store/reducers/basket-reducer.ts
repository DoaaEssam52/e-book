import { createReducer, on } from '@ngrx/store';

import {
  getMyBasketRequest,
  getMyBasketRequestFail,
  getMyBasketRequestSuccess,
  incrementItemBasketRequest,
  incrementItemBasketRequestFail,
  incrementItemBasketRequestSuccess,
  removeItemFromBasketRequest,
  removeItemFromBasketRequestFail,
  removeItemFromBasketRequestSuccess,
  updateBasket,
  updateBasketFail,
  updateBasketSuccess,
} from '../actions/basket-action';

import { BasketState } from '../models/basket-state-model';

const initialBasketState: BasketState = {
  loading: false,
  error: '',
  _id: '',
  items: [],
  totalPrice: 0,
  totalItemsCount: 0,
};

export const BasketReducer = createReducer(
  initialBasketState,

  // GET BASKET
  on(getMyBasketRequest, (state) => {
    return { ...state, loading: true };
  }),

  on(getMyBasketRequestSuccess, (state, { _id, items, total }) => {
    return {
      ...state,
      loading: false,
      _id,
      items: [...items],
      totalPrice: total,
      totalItemsCount: getTotalCount(items),
    };
  }),

  on(getMyBasketRequestFail, (state, action) => {
    return { ...state, loading: false, error: action.error };
  }),

  // INCREMENT ITEM QUANTITY
  on(incrementItemBasketRequest, (state) => {
    return { ...state, loading: true };
  }),

  on(incrementItemBasketRequestSuccess, (state, { items, total, _id }) => {
    return {
      ...state,
      loading: false,
      _id,
      items: [...items],
      totalPrice: total,
      totalItemsCount: getTotalCount(items),
    };
  }),

  on(incrementItemBasketRequestFail, (state, action) => {
    return { ...state, loading: false, error: action.error };
  }),

  // REMOVE ITEM
  on(removeItemFromBasketRequest, (state) => {
    return { ...state, loading: true };
  }),

  on(removeItemFromBasketRequestSuccess, (state, { items, total, _id }) => {
    return {
      ...state,
      loading: false,
      _id,
      items: [...items],
      totalPrice: total,
      totalItemsCount: getTotalCount(items),
    };
  }),

  on(removeItemFromBasketRequestFail, (state, action) => {
    return { ...state, loading: false, error: action.error };
  }),

  // UPDATE BASKET ITEMS
  on(updateBasket, (state) => {
    return { ...state, loading: true };
  }),

  on(updateBasketSuccess, (state, { items, total }) => {
    let count = 0;
    items.forEach((item: any) => {
      count += item.quantity;
    });

    return {
      ...state,
      loading: false,
      items: [...items],
      totalPrice: total,
      totalItemsCount: getTotalCount(items),
    };
  }),

  on(updateBasketFail, (state, action) => {
    return { ...state, loading: false, error: action.error };
  })
);

export const getTotalCount = (items: any[]): number => {
  return items.reduce((accumulator, item) => accumulator + item.quantity, 0);
};
