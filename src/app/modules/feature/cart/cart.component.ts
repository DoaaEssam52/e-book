import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import { BasketSelector } from '../../../store/selectors/basket-selector';

import { State } from '../../../store/models/state-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  isEmptyCart!: boolean;

  orderId!: string;

  cartItems: any = [];

  isLoadingInitialPage = true;

  getCartSubscription!: Subscription;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.isLoadingInitialPage = true;

    this.getCartSubscription = this.store.select(BasketSelector).subscribe({
      next: ({ totalItemsCount, loading, _id }) => {
        this.isEmptyCart = totalItemsCount == 0 ? true : false;

        this.orderId = _id;

        this.isLoadingInitialPage = loading;
      },
      error: () => (this.isLoadingInitialPage = false),
    });
  }

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    this.getCartSubscription.unsubscribe();
  }
}
