import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { retreiveUserToken } from './store/actions/auth-action';
import { getCategoriesRequest } from './store/actions/categories-action';
import { getMyBasketRequest } from './store/actions/basket-action';
import { getBooksImages } from './store/actions/books-action';

import { State } from './store/models/state-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    // Dispatch actions if logged in
    if (token) {
      this.store.dispatch(retreiveUserToken({ token }));
      this.store.dispatch(getCategoriesRequest());
      this.store.dispatch(getMyBasketRequest());
    }

    // Dispatch books static images
    this.store.dispatch(getBooksImages());
  }
}
