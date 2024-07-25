import { Component, Input } from '@angular/core';

import { Book } from '../../../../shared/models/book.model';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.scss'],
})
export class NewBooksComponent {
  @Input() newBooks: Book[] = [];
}
