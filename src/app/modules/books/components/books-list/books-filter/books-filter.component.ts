import { Component, EventEmitter, Output } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.scss'],
})
export class BooksFilterComponent {
  @Output() filter = new EventEmitter();

  minPrice = 0;
  maxPrice = 10000;

  authors = ['Upskilling', 'Omar', 'Ahmed 2', 'Ahmed', 'shimaa'];

  filterForm = new FormGroup({
    minPrice: new FormControl(null, [Validators.min(this.minPrice)]),
    maxPrice: new FormControl(null, [Validators.max(this.maxPrice)]),
    author: new FormControl(''),
    category: new FormControl(''),
  });

  submitFilter(): void {
    this.filter.emit(this.filterForm.value);
  }
}
