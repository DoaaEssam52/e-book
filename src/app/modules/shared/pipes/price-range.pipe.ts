import { Pipe, PipeTransform } from '@angular/core';

import { Book } from '../models/book.model';

@Pipe({
  name: 'priceRange',
})
export class PriceRangePipe implements PipeTransform {
  transform(books: Book[], minPrice: number, maxPrice: number): Book[] {
    if (maxPrice === 0) {
      return [];
    }

    if (minPrice) {
      books = [...books.filter((book: Book) => book.price >= minPrice)];
    }

    if (maxPrice) {
      books = [...books.filter((book: Book) => book.price <= maxPrice)];
    }

    return books;
  }
}
