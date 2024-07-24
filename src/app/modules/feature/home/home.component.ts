import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Book } from '../../shared/models/book.model';
import { State } from '../../../store/models/state-model';

import { booksSelector } from '../../../store/selectors/books-selector';
import { getBooksRequest } from '../../../store/actions/books-action';
import { getCategoriesRequest } from 'src/app/store/actions/categories-action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  randomBooks!: Book[];

  isLoadingBooks = true;

  constructor(private _store: Store<State>) {}

  ngOnInit(): void {
    this._store.dispatch(getBooksRequest());
    this._store.dispatch(getCategoriesRequest());

    this.getBooks();
  }

  getBooks(): void {
    this._store.select(booksSelector).subscribe({
      next: ({ books }) => {
        const total = books.length;
        const limit = total > 3 ? 3 : total;

        this.randomBooks = books.slice(0, limit);

        setTimeout(() => {
          this.isLoadingBooks = false;
        }, 2000);
      },
      error: () => (this.isLoadingBooks = false),
    });
  }
}
