import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { BasketSelector } from '../../../../../store/selectors/basket-selector';

import { BookService } from '../../../../shared/services/book.service';

import { State } from '../../../../../store/models/state-model';
import { Book } from '../../../../shared/models/book.model';

import {
  removeItemFromBasketRequest,
  updateBasket,
} from '../../../../../store/actions/basket-action';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./../../cart.component.scss', './cart-details.component.scss'],
})
export class CartDetailsComponent implements OnInit, OnDestroy {
  orderId!: string;

  allBooks!: Book[];
  cartItems: any = [];
  preSavedCartItems: any = [];

  totalPrice = 0;

  isLoadingUpdate = false;
  isLoadingDelete = false;

  getBooksSubscription!: Subscription;
  getCartSubscription!: Subscription;

  constructor(private store: Store<State>, private _books: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.getBooksSubscription = this._books.getAllBooks().subscribe({
      next: ({ data }) => {
        this.allBooks = data ?? [];
        this.getCartItems();
      },
    });
  }

  getCartItems(): void {
    this.getCartSubscription = this.store.select(BasketSelector).subscribe({
      next: ({ items, totalPrice, _id, loading }) => {
        this.orderId = _id;

        this.formatCartItems(items);

        this.totalPrice = totalPrice;

        this.isLoadingUpdate = this.isLoadingDelete ? false : loading;
        this.isLoadingDelete = this.isLoadingDelete ? loading : false;
      },
    });
  }

  formatCartItems(items: any[]): void {
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

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    this.getBooksSubscription.unsubscribe();
    this.getCartSubscription.unsubscribe();
  }
}
