import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';

import { Book } from '../../../models/book.model';
import { State } from '../../../../../store/models/state-model';

import { incrementItemBasketRequest } from '../../../../../store/actions/basket-action';

import { BasketSelector } from '../../../../../store/selectors/basket-selector';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: Book;
  @Input() imgSrc!: string;

  isEmptyCart: boolean = true;

  constructor(
    private store: Store<State>,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.store.select(BasketSelector).subscribe({
      next: ({ totalItemsCount }) => (this.isEmptyCart = totalItemsCount == 0),
    });
  }

  viewDetails(): void {
    this._router.navigateByUrl('shop/' + this.book._id + '/details');
  }

  addToCart() {
    this.store.dispatch(
      incrementItemBasketRequest({
        book: this.book._id,
        quantity: 1,
      })
    );
  }
}
