import { Pipe, PipeTransform } from '@angular/core';

import { Book } from '../../shared/models/book.model';

@Pipe({
  name: 'priceRange',
})

export class PriceRangePipe implements PipeTransform {
  transform(books: Book[], minPrice: number, maxPrice: number): Book[] {
    return books.filter(
      (book: Book) => book.price >= minPrice && book.price <= maxPrice
    );
  }
}
