import { createAction, props } from '@ngrx/store';

import { BasketItem } from '../models/basket-item-model';
import { UpdateBasketResponseData } from '../../modules/feature/cart/models/update-basket-response-model';

// GET BASKET ACTIONS
export const getMyBasketRequest = createAction('GET_MY_BASKET_REQUEST');

export const getMyBasketRequestSuccess = createAction(
  'GET_MY_BASKET_REQUEST_SUCCESS',
  props<{ _id: string; items: BasketItem[]; total: number }>()
);

export const getMyBasketRequestFail = createAction(
  'GET_MY_BASKET_REQUEST_FAIL',
  props<{ error: string }>()
);

// INCREMENT ITEM QUANTITY ACTIONS
export const incrementItemBasketRequest = createAction(
  'INCREMENT_CERTAIN_ITEM_IN_BASKET_REQUEST',
  props<BasketItem>()
);

export const incrementItemBasketRequestSuccess = createAction(
  'INCREMENT_CERTAIN_ITEM_IN_BASKET_REQUEST_SUCCESS',
  props<UpdateBasketResponseData>()
);

export const incrementItemBasketRequestFail = createAction(
  'INCREMENT_CERTAIN_ITEM_IN_BASKET_REQUEST_FAIL',
  props<{ error: string }>()
);

// DECREMENT ITEM QUANTITY ACTIONS
export const decrementItemBasketRequest = createAction(
  'DECREMENT_CERTAIN_ITEM_IN_BASKET_REQUEST',
  props<BasketItem>()
);

export const decrementItemBasketRequestSuccess = createAction(
  'DECREMENT_CERTAIN_ITEM_IN_BASKET_REQUEST_SUCCESS',
  props<UpdateBasketResponseData>()
);

export const decrementItemBasketRequestFail = createAction(
  'DECREMENT_CERTAIN_ITEM_IN_BASKET_REQUEST_FAIL',
  props<{ error: string }>()
);

// UPDATE BASKET ACTIONS
export const updateBasket = createAction(
  'UPDATE_BASKET',
  props<{ items: any[]; _id: string }>()
);

export const updateBasketSuccess = createAction(
  'UPDATE_BASKET_SUCCESS',
  props<{ items: any; total: number; _id: string }>()
);

export const updateBasketFail = createAction(
  'UPDATE_BASKET_FAIL',
  props<{ error: string }>()
);

// export const incrementItemCountToCart = createAction(
//   'INCREMENT_ITEM_COUNT_TO_CART',
//   props<{ cartItem: CartItem }>()
// );

// export const decrementItemCountFromCart = createAction(
//   'DECREMENT_ITEM_COUNT_FROM_CART',
//   props<{ cartItem: CartItem }>()
// );

// export const removeItemFromCart = createAction(
//   'REMOVE_ITEM_FROM_CART',
//   props<{ cartItem: CartItem }>()
// );
