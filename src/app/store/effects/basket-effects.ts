import { Injectable } from '@angular/core';

import { catchError, map, of, switchMap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  getMyBasketRequestFail,
  getMyBasketRequest,
  getMyBasketRequestSuccess,
  incrementItemBasketRequest,
  incrementItemBasketRequestSuccess,
  incrementItemBasketRequestFail,
  decrementItemBasketRequest,
  decrementItemBasketRequestFail,
  decrementItemBasketRequestSuccess,
  updateBasket,
  updateBasketSuccess,
  updateBasketFail,
} from '../actions/basket-action';

import { CartService } from '../../modules/feature/cart/services/cart.service';

import { GetMyBasket } from '../models/getMyBasket-model';

@Injectable()
export class BasketEffects {
  constructor(private actions: Actions, private _cart: CartService) {}

  getCart$ = createEffect(() => {
    return this.actions.pipe(
      ofType(getMyBasketRequest),
      switchMap(() => {
        return this._cart.getMyBasket().pipe(
          map(({ _id, items, total }: GetMyBasket) => {
            return getMyBasketRequestSuccess({ _id, items, total });
          }),
          catchError((error) => of(getMyBasketRequestFail({ error })))
        );
      })
    );
  });

  incrementItemInCart$ = createEffect(() => {
    return this.actions.pipe(
      ofType(incrementItemBasketRequest),
      switchMap(({ book, quantity }) => {
        return this._cart.incrementItem({ book, quantity }).pipe(
          map(({ data }) => {
            return incrementItemBasketRequestSuccess(data);
          }),
          catchError((error) => of(incrementItemBasketRequestFail({ error })))
        );
      })
    );
  });

  decrementItemInCart$ = createEffect(() => {
    return this.actions.pipe(
      ofType(decrementItemBasketRequest),
      switchMap(({ book, quantity }) => {
        return this._cart.decrementItem({ book, quantity }).pipe(
          map(({ data }) => {
            return decrementItemBasketRequestSuccess(data);
          }),
          catchError((error) => of(decrementItemBasketRequestFail({ error })))
        );
      })
    );
  });

  updateCart$ = createEffect(() => {
    return this.actions.pipe(
      ofType(updateBasket),
      switchMap(({ items, _id }) => {
        return this._cart.updateBasket({ items, _id }).pipe(
          map(({ data }) => {
            return updateBasketSuccess(data);
          }),
          catchError((error) => of(updateBasketFail({ error })))
        );
      })
    );
  });
}
