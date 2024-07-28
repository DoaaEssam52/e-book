import { Component, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import { categoriesSelector } from '../../../../../store/selectors/categories-selector';

import { Category } from '../../../../../modules/shared/models/category.model';
import { State } from '../../../../../store/models/state-model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  getCategoriesSubscription!: Subscription;

  constructor(private _store: Store<State>, private router: Router) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this.getCategoriesSubscription = this._store
      .select(categoriesSelector)
      .subscribe({
        next: ({ categories }) => (this.categories = categories.slice(0, 5)),
      });
  }

  viewCategoryBooks(category: Category): void {
    this.router.navigate(['/shop'], {
      queryParams: { category: category._id },
    });
  }

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    this.getCategoriesSubscription.unsubscribe();
  }
}
