import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';

import { Book } from '../../../models/book.model';
import { State } from '../../../../../store/models/state-model';

import { incrementItemBasketRequest } from '../../../../../store/actions/basket-action';

import { BasketSelector } from '../../../../../store/selectors/basket-selector';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit, OnDestroy {
  @Input() book!: Book;
  @Input() imgSrc!: string;

  isLoggedIn!: boolean;

  isEmptyCart: boolean = true;

  getCartSubscription!: Subscription;

  constructor(
    private store: Store<State>,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('token') ? true : false;

    this.getCartSubscription = this.store.select(BasketSelector).subscribe({
      next: ({ totalItemsCount }) => (this.isEmptyCart = totalItemsCount == 0),
    });
  }

  viewDetails(): void {
    this._router.navigateByUrl('shop/' + this.book._id + '/details');
  }

  addToCart() {
    if (this.isLoggedIn) {
      this.store.dispatch(
        incrementItemBasketRequest({
          book: this.book._id,
          quantity: 1,
        })
      );
    } else {
      this._snackBar.open(
        'Please login first to be able to shopping',
        'close',
        {
          duration: 3000,
        }
      );
    }
  }

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    this.getCartSubscription.unsubscribe();
  }
}
