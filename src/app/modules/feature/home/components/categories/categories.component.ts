import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { categoriesSelector } from '../../../../../store/selectors/categories-selector';

import { Category } from '../../../../../modules/shared/models/category.model';
import { State } from '../../../../../store/models/state-model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(private _store: Store<State>, private router: Router) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this._store.select(categoriesSelector).subscribe({
      next: ({ categories }) => (this.categories = categories.slice(0, 5)),
    });
  }
  
  viewCategoryBooks(category: Category): void {
    this.router.navigate(['/shop'], {
      queryParams: { category: category._id },
    });
  }
}
