import { Component, Input } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';
import { incrementItemCountToCart } from '../../../../../store/actions/cart-action';

import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: Book;
  @Input() imgSrc!: string;

  constructor(private store: Store, private _snackBar: MatSnackBar) {}

  addToCart() {
    this.store.dispatch(
      incrementItemCountToCart({ cartItem: { book: this.book, count: 1 } })
    );

    this._snackBar.open('Item is added successfully to cart', 'close', {
      duration: 3000,
    });
  }
}
