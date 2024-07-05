import { createAction, props } from '@ngrx/store';

import { CartItem } from './../../modules/shared/models/cart-item.model';

export const initCart = createAction('INITIALIZE_CART');

export const incrementItemCountToCart = createAction(
  'INCREMENT_ITEM_COUNT_TO_CART',
  props<{ cartItem: CartItem }>()
);

export const decrementItemCountFromCart = createAction(
  'DECREMENT_ITEM_COUNT_FROM_CART',
  props<{ cartItem: CartItem }>()
);

export const removeItemFromCart = createAction(
  'REMOVE_ITEM_FROM_CART',
  props<{ cartItem: CartItem }>()
);