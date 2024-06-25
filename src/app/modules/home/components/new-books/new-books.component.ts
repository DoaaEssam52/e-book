import { Component } from '@angular/core';

import { Book } from '../../models/book.model';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.scss'],
})
export class NewBooksComponent {
  newBooks: Book[] = [
    {
      name: 'Book1',
      imgSrc:
        'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/back_home1-600x900.jpg',
      price: 12,
    },
    {
      name: 'Book2',
      imgSrc:
        'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/back_home1-600x900.jpg',
      price: 684,
    },
    {
      name: 'Book3',
      imgSrc:
        'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/back_home1-600x900.jpg',
      price: 1000,
    },
  ];
}
