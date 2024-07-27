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

// REMOVE ITEM ACTIONS
export const removeItemFromBasketRequest = createAction(
  'REMOVE_CERTAIN_ITEM_FROM_BASKET_REQUEST',
  props<any>()
);

export const removeItemFromBasketRequestSuccess = createAction(
  'REMOVE_CERTAIN_ITEM_FROM_BASKET_REQUEST_SUCCESS',
  props<UpdateBasketResponseData>()
);

export const removeItemFromBasketRequestFail = createAction(
  'REMOVE_CERTAIN_ITEM_FROM_BASKET_REQUEST_FAIL',
  props<{ error: string }>()
);
