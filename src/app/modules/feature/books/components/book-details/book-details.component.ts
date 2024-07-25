import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { BookService } from '../../../../../modules/shared/services/book.service';

import { Book } from '../../../../../modules/shared/models/book.model';
import { State } from '../../../../../store/models/state-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnDestroy {
  book!: Book;

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
      },
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.getBooksSubscription.unsubscribe();
  }
}
