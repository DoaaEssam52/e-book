import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getCategoriesRequest,
  getCategoriesRequestSuccess,
  getCategoriesRequestFailure,
} from '../actions/categories-action';

import { catchError, map, of, switchMap } from 'rxjs';

import { BookService } from '../../modules/shared/services/book.service';

import { Category } from '../../modules/shared/models/category.model';

@Injectable()
export class CategoriesEffects {
  images: string[] = [
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/study_viii_by_djamilaknopf_dae7zru-fullview-800x674.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/crossing_by_djamilaknopf_dcyliov-fullview-800x566.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/06/cat5-1300x529.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/06/cat1-1300x571.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/01/dan-zhao-1-1024x683.jpg',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/01/da4zxlz-0f78a159-4933-4d92-9ee8-c1196993ef87-1000x600.png',
    'https://subsolardesigns.com/leona/wp-content/uploads/2019/01/happy_leaf__commission__by_nieris_dazqyfb-fullview-1000x600.jpg',
  ];

  constructor(private actions: Actions, private _books: BookService) {}

  loadCategories$ = createEffect(() => {
    return this.actions.pipe(
      ofType(getCategoriesRequest),
      switchMap(() => {
        return this._books.getAllCategories().pipe(
          map((res) => {
            const categories = res.map((category: Category, index: number) => {
              return {
                ...category,
                imgSrc: this.images[index % this.images.length],
              };
            });
            return getCategoriesRequestSuccess({ categories });
          }),
          catchError((error) => of(getCategoriesRequestFailure({ error })))
        );
      })
    );
  });
}
