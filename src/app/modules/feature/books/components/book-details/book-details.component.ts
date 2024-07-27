import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import { Book } from '../../../../../modules/shared/models/book.model';
import { State } from '../../../../../store/models/state-model';

import { incrementItemBasketRequest } from '../../../../../store/actions/basket-action';

import { BookService } from '../../../../../modules/shared/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnDestroy {
  book!: Book;

  isLoadingData = true;

  routeSubscription!: Subscription;
  getBooksSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private _books: BookService,
    private store: Store<State>
  ) {
    this.routeSubscription = this.route.params.subscribe({
      next: ({ id }) => {
        this.getBookById(id);
      },
    });
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
    this.store.dispatch(
      incrementItemBasketRequest({
        book: this.book._id,
        quantity: 1,
      })
    );
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.getBooksSubscription.unsubscribe();
  }
}
