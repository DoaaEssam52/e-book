import { Component, OnInit } from '@angular/core';

import { BookService } from '../../../../modules/shared/services/book.service';

import { BooksFilteration } from '../../models/filteration-model';
import { Book } from '../../../../modules/shared/models/book.model';

import { PriceRangePipe } from '../../pipes/price-range.pipe';
import { FilterByKeyPipe } from '../../../shared/pipes/filter-by-key.pipe';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  isLoading = true;

  filteration!: BooksFilteration;

  pageIndex!: number;
  pageSize = 4;
  length!: number;

  books!: Book[];
  filteredBooks!: Book[];

  priceRangePipe = new PriceRangePipe();
  filterByKeyPipe = new FilterByKeyPipe();

  constructor(private _book: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this._book.getAllBooks().subscribe({
      next: ({ total, data }) => {
        this.length = total;

        this.books = data ?? [];
        this.filteredBooks = data ?? [];

        this.isLoading = false;
      },
      error: () => (this.isLoading = false),
    });
  }

  filter({ minPrice, maxPrice, author, category }: BooksFilteration): void {
    this.isLoading = true;

    this.filteredBooks = [...this.books];
    this.filteration = { minPrice, maxPrice, author, category };

    if (minPrice || maxPrice) {
      this.filteredBooks = this.priceRangePipe.transform(
        this.books,
        minPrice,
        maxPrice
      );
    }

    if (author) {
      this.filteredBooks = this.filterByKeyPipe.transform(
        this.filteredBooks,
        'auther',
        author
      );
    }

    if (category) {
      this.filteredBooks = this.filterByKeyPipe.transform(
        this.filteredBooks,
        'category',
        category
      );
    }

    this.length = this.filteredBooks.length;

    this.isLoading = false;
  }

  getPageIndex(e: number) {
    this.pageIndex = e;
  }
}
