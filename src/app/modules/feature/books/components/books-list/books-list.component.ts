import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { BooksFilteration } from '../../models/filteration-model';
import { Book } from '../../../../../modules/shared/models/book.model';

import { BookService } from '../../../../../modules/shared/services/book.service';

import { PriceRangePipe } from '../../pipes/price-range.pipe';
import { FilterByKeyPipe } from '../../../../shared/pipes/filter-by-key.pipe';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  isLoading = true;

  filteration!: BooksFilteration;

  categoryId = '';

  pageIndex = 0;
  pageSize = 8;
  length!: number;

  books: Book[] = [];
  filteredBooks: Book[] = [];

  booksImages: string[] = [];

  priceRangePipe = new PriceRangePipe();
  filterByKeyPipe = new FilterByKeyPipe();

  constructor(private _books: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBooks();

    this.handleInitiallyFilterByCategory();
  }

  getRandomImagesToBooks(): void {
    this.booksImages = this._books.getRandomImagesToBooks();
  }

  handleInitiallyFilterByCategory(): void {
    this.route.queryParams.subscribe((params) => {
      this.categoryId = params['category'] || null;
    });
  }

  getBooks(): void {
    this._books.getAllBooks().subscribe({
      next: ({ data }) => {
        setTimeout(() => {
          this.length = data.length;

          this.books = data;
          this.filteredBooks = data;
          this.getRandomImagesToBooks();

          this.isLoading = false;
        });
      },
      error: () => (this.isLoading = false),
    });
  }

  filter({
    name,
    minPrice,
    maxPrice,
    author,
    category,
  }: BooksFilteration): void {
    this.isLoading = true;

    this.filteredBooks = [...this.books];
    this.filteration = { name, minPrice, maxPrice, author, category };

    if (minPrice || maxPrice) {
      this.filteredBooks = this.priceRangePipe.transform(
        this.books,
        minPrice,
        maxPrice
      );
    }

    if (name) {
      this.filteredBooks = this.filterByKeyPipe.transform(
        this.filteredBooks,
        'name',
        name
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
