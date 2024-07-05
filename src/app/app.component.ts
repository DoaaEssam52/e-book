import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItem } from './modules/shared/models/cart-item.model';
import { initCart } from './store/actions/cart-action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'books';

  constructor(private store: Store<{ cartItems: CartItem[] }>) {}

  ngOnInit(): void {
    this.store.dispatch(initCart());
  }
}
