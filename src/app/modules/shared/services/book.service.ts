import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import { Book } from '../models/book.model';
import { GetAllBooks } from '../models/get-all-books.model';
import { State } from '../../../store/models/state-model';

import { booksSelector } from '../../../store/selectors/books-selector';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService implements OnDestroy {
  allBooksImages: string[] = [];

  getAllBooksSubscription!: Subscription;

  constructor(private _httpClient: HttpClient, private _store: Store<State>) {
    this.getAllImages();
  }

  getAllImages(): void {
    this.getAllBooksSubscription = this._store.select(booksSelector).subscribe({
      next: ({ images }) => (this.allBooksImages = images),
    });
  }

  getRandomImagesToBooks(): string[] {
    return this.allBooksImages.map(
      () =>
        this.allBooksImages[
          Math.floor(Math.random() * this.allBooksImages.length)
        ]
    );
  }

  // HTTP Requests
  getAllBooks(): Observable<GetAllBooks> {
    return this._httpClient.get<GetAllBooks>(`${environment.getAllBooks}`);
  }

  getAllCategories(): Observable<any> {
    return this._httpClient.get(`${environment.getAllCategories}`);
  }

  getBookById(bookId: string): Observable<Book> {
    return this._httpClient.get<Book>(`${environment.getBook}/${bookId}`);
  }

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    this.getAllBooksSubscription.unsubscribe();
  }
}
