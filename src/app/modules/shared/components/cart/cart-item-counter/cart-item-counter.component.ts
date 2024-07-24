import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Store } from '@ngrx/store';

import {
  decrementItemBasketRequest,
  incrementItemBasketRequest,
} from '../../../../../store/actions/basket-action';

@Component({
  selector: 'app-cart-item-counter',
  templateUrl: './cart-item-counter.component.html',
  styleUrls: ['./cart-item-counter.component.scss'],
})
export class CartItemCounterComponent implements OnInit {
  @Output() itemPreSavedQuantity = new EventEmitter();

  @Input() cartItem: any;

  count: number = 0;

  incrementCount = 0;
  decrementCount = 0;

  constructor(private store: Store<{ cartItems: any }>) {}

  ngOnInit(): void {
    this.count = this.cartItem.quantity;
  }

  increment(): void {
    this.incrementCount = this.incrementCount + 1;
    this.decrementCount--;

    this.count++;

    this.itemPreSavedQuantity.emit(this.count);
  }

  decrement(): void {
    this.decrementCount = this.decrementCount + 1;
    this.incrementCount--;

    this.count--;

    this.itemPreSavedQuantity.emit({
      book: this.cartItem._id,
      quantity: this.count,
    });
  }

  // saveToCart(): void {
  //   const diffference = this.incrementCount - this.decrementCount;

  //   if (diffference > 0) {

  //     this.store.dispatch(
  //       incrementItemBasketRequest({
  //         book: this.cartItem._id,
  //         quantity: this.incrementCount,
  //       })
  //     );
  //   } else {
  //     this.store.dispatch(
  //       decrementItemBasketRequest({
  //         book: this.cartItem._id,
  //         quantity: this.decrementCount,
  //       })
  //     );
  //   }

  //   this.incrementCount = 0;
  //   this.decrementCount = 0;
  // }
}
