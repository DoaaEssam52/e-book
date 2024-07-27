import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';

import { BasketSelector } from '../../../store/selectors/basket-selector';

import { BookService } from '../../shared/services/book.service';

import { State } from '../../../store/models/state-model';
import { Book } from '../../shared/models/book.model';

import {
  removeItemFromBasketRequest,
  updateBasket,
} from 'src/app/store/actions/basket-action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  orderId!: string;

  allBooks!: Book[];

  cartItems: any = [];
  preSavedCartItems: any = [];

  totalPrice = 0;

  isLoadingInitialPage = true;
  isLoadingUpdate = false;
  isLoadingDelete = false;

  constructor(private store: Store<State>, private _books: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this._books.getAllBooks().subscribe({
      next: ({ data }) => {
        this.allBooks = data ?? [];
        this.getCartItems();
      },
    });
  }

  getCartItems(): void {
    this.isLoadingInitialPage = true;

    this.store.select(BasketSelector).subscribe({
      next: ({ items, totalPrice, _id, loading }) => {
        this.orderId = _id;

        this.cartItems = items.map((cartItem) => {
          // Find the corresponding book
          const bookId =
            typeof cartItem.book === 'object'
              ? cartItem.book['_id']
              : cartItem.book;

          const book = this.allBooks.find((b) => b._id === bookId);

          return {
            _id: book?._id,
            itemId: cartItem?._id,
            name: book?.name,
            auther: book?.auther,
            price: book?.price,
            quantity: cartItem.quantity,
          };
        });

        this.preSavedCartItems = [...this.cartItems];

        this.totalPrice = totalPrice;

        this.isLoadingInitialPage = false;
        this.isLoadingUpdate = this.isLoadingDelete ? false : loading;
        this.isLoadingDelete = this.isLoadingDelete ? loading : false;
      },
      error: () => (this.isLoadingInitialPage = false),
    });
  }

  removeItem(item: any): void {
    this.isLoadingDelete = true;

    this.store.dispatch(removeItemFromBasketRequest(item));
  }

  updatePreSavedQuantity(e: any): void {
    const itemIndex = this.preSavedCartItems.findIndex(
      (item: any) => item._id === e.book
    );

    this.preSavedCartItems[itemIndex].quantity = e.quantity;
  }

  updateCart(): void {
    this.store.dispatch(
      updateBasket({
        items: [...this.preSavedCartItems].map(({ _id, quantity }) => {
          return { book: _id, quantity };
        }),
        _id: this.orderId,
      })
    );
  }
}
