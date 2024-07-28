import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { categoriesSelector } from './../../../../../../store/selectors/categories-selector';

import { State } from './../../../../../../store/models/state-model';
import { Category } from './../../../../../../modules/shared/models/category.model';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.scss'],
})
export class BooksFilterComponent implements OnInit, OnDestroy {
  @Output() filter = new EventEmitter();

  @Input() categoryId: string = '';

  authors = ['Upskilling', 'Omar', 'Ahmed 2', 'Ahmed', 'shimaa'];
  categories: Category[] = [];

  getCategoriesSubscription!: Subscription;

  filterForm = new FormGroup({
    name: new FormControl(null),
    minPrice: new FormControl(null),
    maxPrice: new FormControl(null),
    author: new FormControl(''),
    category: new FormControl(''),
  });

  constructor(private _store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.getCategoriesSubscription = this._store
      .select(categoriesSelector)
      .subscribe({
        next: ({ categories }) => (this.categories = categories),
      });

    this.handleInitiallyFilterByCategory();
  }

  handleInitiallyFilterByCategory(): void {
    if (this.categoryId) {
      this.filterForm.patchValue({ category: this.categoryId });

      this.submitFilter();
    }
  }

  preventNegativeNumbers(event: KeyboardEvent): void {
    if (event.key === '-' || event.key === 'e') {
      event.preventDefault();
    }
  }

  submitFilter(): void {
    this.filter.emit(this.filterForm.value);
  }

  resetFilter(): void {
    if (this.categoryId) {
      this.router.navigate(['/shop']);
    }

    this.filterForm.reset();

    this.submitFilter();
  }

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    this.getCategoriesSubscription.unsubscribe();
  }
}
