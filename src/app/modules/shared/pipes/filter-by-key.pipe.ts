import { Pipe, PipeTransform } from '@angular/core';

import { Book } from '../../shared/models/book.model';

@Pipe({
  name: 'filterByKey',
})
export class FilterByKeyPipe implements PipeTransform {
  transform(books: Book[], key: keyof Book, value: any): Book[] {
    return books.filter((book: Book) => book[key] == value);
  }
}
