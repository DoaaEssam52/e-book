import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';

import { Book } from '../../../models/book.model';
import { incrementItemBasketRequest } from 'src/app/store/actions/basket-action';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: Book;
  @Input() imgSrc!: string;

  constructor(
    private store: Store,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit(): void {
    document.querySelectorAll('.button').forEach((button) =>
      button.addEventListener('click', (e) => {
        if (!button.classList.contains('added')) {
          button.classList.add('added');
        }
        e.preventDefault();
      })
    );
  }

  viewDetails(): void {
    this._router.navigateByUrl('shop/' + this.book._id + '/details');
  }

  addToCart() {
    this.store.dispatch(
      incrementItemBasketRequest({
        book: this.book._id,
        quantity: 6,
      })
    );

    this._snackBar.open('Item is added successfully to cart', 'close', {
      duration: 3000,
    });
  }
}
