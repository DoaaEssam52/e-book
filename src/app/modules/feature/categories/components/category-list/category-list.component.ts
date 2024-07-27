import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { categoriesSelector } from '../../../../../store/selectors/categories-selector';

import { State } from '../../../../../store/models/state-model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  categories: any[] = [];

  constructor(private _store: Store<State>) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this._store.select(categoriesSelector).subscribe({
      next: ({ categories }) => (this.categories = categories),
    });
  }
}
