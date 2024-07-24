import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { navbarSelector } from '../../../../../store/selectors/navbar-selector';

import { BookService } from '../../../../../modules/shared/services/book.service';

import { Book } from '../../../../../modules/shared/models/book.model';
import { State } from '../../../../../store/models/state-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book!: Book;

  navbarHeight: number = 0;

  navbarSubscription!: Subscription;
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

  ngOnInit(): void {

    this.navbarSubscription = this.store.select(navbarSelector).subscribe({
      next: ({ height }) => {
        const pageContainer = document.getElementById('page-container');

        if (pageContainer)
          pageContainer.style.marginTop = height.toString() + 'px';
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
    this.navbarSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
    this.getBooksSubscription.unsubscribe();
  }
}
