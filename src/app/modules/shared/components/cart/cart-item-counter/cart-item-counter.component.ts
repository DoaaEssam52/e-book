import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import {
  decrementItemCountFromCart,
  incrementItemCountToCart,
} from '../../../../../store/actions/cart-action';
import { CartItemsSelector } from '../../../../../store/selectors/cart-items-selector';

import { CartItem } from '../../../models/cart-item.model';

@Component({
  selector: 'app-cart-item-counter',
  templateUrl: './cart-item-counter.component.html',
  styleUrls: ['./cart-item-counter.component.scss'],
})
export class CartItemCounterComponent implements OnInit {
  @Input() cartItem!: CartItem;

  count!: number;

  constructor(private store: Store<{ cartItems: CartItem[] }>) {}

  ngOnInit(): void {
    this.getCount();
  }

  getCount(): void {
    this.store.select(CartItemsSelector).subscribe({
      next: (state) => {
        this.count =
          state.find((item) => item.book._id == this.cartItem.book._id)
            ?.count ?? 0;
      },
    });
  }

  increment(): void {
    this.store.dispatch(incrementItemCountToCart({ cartItem: this.cartItem }));
  }

  decrement(): void {
    if (this.count > 0) {
      this.store.dispatch(
        decrementItemCountFromCart({ cartItem: this.cartItem })
      );
    }
  }
}
