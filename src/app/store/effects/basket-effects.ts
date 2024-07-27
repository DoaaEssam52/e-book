import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { catchError, map, of, switchMap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  getMyBasketRequestFail,
  getMyBasketRequest,
  getMyBasketRequestSuccess,
  incrementItemBasketRequest,
  incrementItemBasketRequestSuccess,
  incrementItemBasketRequestFail,
  updateBasket,
  updateBasketSuccess,
  updateBasketFail,
  removeItemFromBasketRequest,
  removeItemFromBasketRequestSuccess,
  removeItemFromBasketRequestFail,
} from '../actions/basket-action';

import { CartService } from '../../modules/feature/cart/services/cart.service';

import { GetMyBasket } from '../models/getMyBasket-model';

@Injectable()
export class BasketEffects {
  constructor(
    private actions: Actions,
    private _cart: CartService,
    private _snackBar: MatSnackBar
  ) {}

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
            this._snackBar.open('Item is added successfully to cart', 'close', {
              duration: 3000,
            });

            return incrementItemBasketRequestSuccess(data);
          }),
          catchError((error) => of(incrementItemBasketRequestFail({ error })))
        );
      })
    );
  });

  removeItemInCart$ = createEffect(() => {
    return this.actions.pipe(
      ofType(removeItemFromBasketRequest),
      switchMap(({ itemId }) => {
        return this._cart.removeItem(itemId).pipe(
          map(({ data }) => {
            this._snackBar.open(
              'Item is removed successfully from cart',
              'close',
              {
                duration: 3000,
              }
            );

            return removeItemFromBasketRequestSuccess(data);
          }),
          catchError((error) => of(removeItemFromBasketRequestFail({ error })))
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
            this._snackBar.open('Your cart is updated successfully', 'close', {
              duration: 3000,
            });

            return updateBasketSuccess(data);
          }),
          catchError((error) => of(updateBasketFail({ error })))
        );
      })
    );
  });
}
