import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { categoriesSelector } from './../../../../../../store/selectors/categories-selector';

import { State } from './../../../../../../store/models/state-model';
import { Category } from './../../../../../../modules/shared/models/category.model';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.scss'],
})
export class BooksFilterComponent implements OnInit {
  @Output() filter = new EventEmitter();

  minPrice = 0;
  maxPrice = 10000;

  authors = ['Upskilling', 'Omar', 'Ahmed 2', 'Ahmed', 'shimaa'];
  categories: Category[] = [];

  filterForm = new FormGroup({
    name: new FormControl(null),
    minPrice: new FormControl(null, [Validators.min(this.minPrice)]),
    maxPrice: new FormControl(null, [Validators.max(this.maxPrice)]),
    author: new FormControl(''),
    category: new FormControl(''),
  });

  constructor(private _store: Store<State>) {}

  ngOnInit(): void {
    this._store.select(categoriesSelector).subscribe({
      next: ({ categories }) => (this.categories = categories),
    });
  }

  submitFilter(): void {
    this.filter.emit(this.filterForm.value);
  }

  resetFilter(): void {
    this.filterForm.reset();

    this.submitFilter();
  }
}
