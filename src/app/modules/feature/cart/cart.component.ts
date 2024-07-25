import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';

import { BasketSelector } from '../../../store/selectors/basket-selector';
// import { booksSelector } from '../../../store/selectors/books-selector';

import { State } from '../../../store/models/state-model';
import { Book } from '../../shared/models/book.model';
// import { getBooksRequest } from 'src/app/store/actions/books-action';
import { updateBasket } from 'src/app/store/actions/basket-action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  // cart!: CartItem[];

  allBooks!: Book[];
  cartItems: any = [];
  preSavedCartItems: any = [];

  cart: any;

  orderId!: string;

  totalPrice = 0;

  constructor(private store: Store<State>, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
   // this.store.dispatch(getBooksRequest());

    this.getBooks();
  }

  getBooks(): void {
    // this.store.select(booksSelector).subscribe({
    //   next: ({ books }) => {
    //     this.allBooks = books ?? [];

    //     this.getCartItems();
    //   },
    // });
  }

  getCartItems(): void {
    this.store.select(BasketSelector).subscribe({
      next: ({ items, total, _id }) => {
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
            name: book?.name,
            auther: book?.auther,
            price: book?.price,
            quantity: cartItem.quantity,
          };
        });

        this.preSavedCartItems = [...this.cartItems];

        this.totalPrice = total;
      },
    });
  }

  deleteItem(item: any): void {
    // this.store.dispatch(removeItemFromCart({ cartItem: item }));

    this._snackBar.open('Item is removed successfully from cart', 'close', {
      duration: 3000,
    });
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
