import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';
import { removeItemFromCart } from '../../store/actions/cart-action';
import { CartItemsSelector } from '../../store/selectors/cart-items-selector';

import { CartItem } from '../shared/models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart!: CartItem[];

  totalPrice = 0;

  constructor(
    private store: Store<{ cartItems: CartItem[] }>,
    private _snackBar: MatSnackBar
  ) {
    this.store.select(CartItemsSelector).subscribe({
      next: (res) => {
        this.totalPrice = 0;
        this.cart = res;

        this.cart.forEach((item) => {
          this.totalPrice += item.book.price * item.count;
        });
      },
    });
  }

  deleteItem(item: CartItem): void {
    this.store.dispatch(removeItemFromCart({ cartItem: item }));

    this._snackBar.open('Item is removed successfully from cart', 'close', {
      duration: 3000,
    });
  }
}
