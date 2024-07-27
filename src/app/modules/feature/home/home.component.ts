import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Book } from '../../shared/models/book.model';
import { State } from '../../../store/models/state-model';

import { BookService } from '../../shared/services/book.service';

import { getCategoriesRequest } from 'src/app/store/actions/categories-action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  randomBooks!: Book[];

  booksImages: string[] = [];

  isLoadingBooks = true;

  constructor(private _store: Store<State>, private _books: BookService) {}

  ngOnInit(): void {
    this._store.dispatch(getCategoriesRequest());

    this.getBooks();
  }

  getBooks(): void {
    this._books.getAllBooks().subscribe({
      next: ({ data }) => {
        const total = data.length;
        const limit = total > 3 ? 3 : total;

        this.getRandomImagesToBooks();

        this.randomBooks = data.slice(0, limit);

        this.randomBooks = this.randomBooks.map((book, index) => {
          return {
            ...book,
            imgSrc: this.booksImages[index],
          };
        });

        setTimeout(() => {
          this.isLoadingBooks = false;
        }, 2000);
      },
      error: () => (this.isLoadingBooks = false),
    });
  }

  getRandomImagesToBooks(): void {
    this.booksImages = this._books.getRandomImagesToBooks();
  }
}
