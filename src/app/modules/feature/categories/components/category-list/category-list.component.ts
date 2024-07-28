import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { categoriesSelector } from '../../../../../store/selectors/categories-selector';

import { State } from '../../../../../store/models/state-model';
import { Category } from './../../../../../modules/shared/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit, OnDestroy {
  categories: Category[] = [];

  isLoading = true;

  getCategoriesSubscription!: Subscription;

  constructor(private _store: Store<State>) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.isLoading = true;

    this.getCategoriesSubscription = this._store
      .select(categoriesSelector)
      .subscribe({
        next: ({ categories, loading }) => {
          this.categories = categories;
          
          this.isLoading = loading;
        },
        error: () => (this.isLoading = false),
      });
  }

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    this.getCategoriesSubscription.unsubscribe();
  }
}
