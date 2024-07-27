import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { retreiveUserToken } from './store/actions/auth-action';
import { getCategoriesRequest } from './store/actions/categories-action';
import { getMyBasketRequest } from './store/actions/basket-action';
import { getBooksImages } from './store/actions/books-action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // constructor(private store: Store<{ cartItems: CartItem[] }>) {}
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    // Dispatch User Token, and Categories
    if (token) {
      this.store.dispatch(retreiveUserToken({ token }));
      this.store.dispatch(getCategoriesRequest());
      this.store.dispatch(getMyBasketRequest());
    }

    this.store.dispatch(getBooksImages());
  }
}
