import { createReducer, on } from '@ngrx/store';

import { CartItem } from './../../modules/shared/models/cart-item.model';

import {
  incrementItemCountToCart,
  decrementItemCountFromCart,
  removeItemFromCart,
  initCart,
} from '../actions/cart-action';

const cartState: CartItem[] = [];

const getItemIndex = (state: CartItem[], cartItem: CartItem): number => {
  return state.findIndex((item) => item?.book._id === cartItem?.book._id);
};

const updateItem = (
  state: CartItem[],
  action: { cartItem: CartItem },
  type: string
) => {
  const itemIndex = getItemIndex(state, action.cartItem);

  if (itemIndex != -1) {
    const prevCount = state[itemIndex].count;
    const newCount = type === 'INCREMENT' ? prevCount + 1 : prevCount - 1;

    let newState = [...state];

    newState[itemIndex] = {
      book: { ...newState[itemIndex].book },
      count: newCount,
    };

    localStorage.setItem('cart', JSON.stringify(newState));

    return newState;
  } else {
    localStorage.setItem('cart', JSON.stringify([...state, action.cartItem]));

    return [...state, action.cartItem];
  }
};

export const CartReducer = createReducer(
  cartState,

  on(initCart, (state) => {
    const savedCart = localStorage.getItem('cart');

    if (savedCart) {
      return [...JSON.parse(savedCart)];
    }

    return [...state];
  }),

  on(incrementItemCountToCart, (state, action) => {
    return updateItem(state, action, 'INCREMENT');
  }),

  on(decrementItemCountFromCart, (state, action) => {
    return updateItem(state, action, 'DECREMENT');
  }),

  on(removeItemFromCart, (state, action) => {

    const cartWithoutItem = [...state].filter(
      (item) => item.book._id !== action.cartItem.book._id
    );

    localStorage.setItem('cart', JSON.stringify([...cartWithoutItem]));

    return cartWithoutItem;
  })
);
