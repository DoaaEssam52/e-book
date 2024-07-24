import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Category } from '../../../../../modules/shared/models/category.model';
import { State } from 'src/app/store/models/state-model';
import { categoriesSelector } from 'src/app/store/selectors/categories-selector';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(private _store: Store<State>) {}

  categories: Category[] = [];

  paragraphs: string[] = [
    'https://via.placeholder.com/600x400.png?text=Image+1',
    'https://via.placeholder.com/600x400.png?text=Image+2',
    'https://via.placeholder.com/600x400.png?text=Image+3',
    'https://via.placeholder.com/600x400.png?text=Image+4',
    'https://via.placeholder.com/600x400.png?text=Image+5',
  ];

  ngOnInit(): void {
    this._store.select(categoriesSelector).subscribe({
      next: ({ categories }) => (this.categories = categories),
    });
  }
}
