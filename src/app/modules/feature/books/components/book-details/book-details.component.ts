import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Book } from '../../../../../modules/shared/models/book.model';
import { State } from '../../../../../store/models/state-model';

import { incrementItemBasketRequest } from '../../../../../store/actions/basket-action';

import { BookService } from '../../../../../modules/shared/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book!: Book;

  isLoadingData = true;

  isLoggedIn!: boolean;

  routeSubscription!: Subscription;
  getBooksSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private _books: BookService,
    private store: Store<State>,
    private _snackBar: MatSnackBar
  ) {
    this.routeSubscription = this.route.params.subscribe({
      next: ({ id }) => {
        this.getBookById(id);
      },
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('token') ? true : false;
  }

  getBookById(id: string): void {
    this.getBooksSubscription = this._books.getBookById(id).subscribe({
      next: (book) => {
        this.book = book;
        this.isLoadingData = false;
      },
      error: (error) => {
        this.isLoadingData = false;
      },
    });
  }

  addToCart(): void {
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
    this.routeSubscription.unsubscribe();
    this.getBooksSubscription.unsubscribe();
  }
}
