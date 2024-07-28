import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item-counter',
  templateUrl: './cart-item-counter.component.html',
  styleUrls: ['./cart-item-counter.component.scss'],
})
export class CartItemCounterComponent implements OnInit {
  @Output() itemPreSavedQuantity = new EventEmitter();

  @Input() cartItem: any;
  @Input() isLoadingItemCount: boolean = false;

  count: number = 0;

  incrementCount = 0;
  decrementCount = 0;

  ngOnInit(): void {
    this.count = this.cartItem.quantity;
  }

  increment(): void {
    this.incrementCount = this.incrementCount + 1;
    this.decrementCount--;

    this.count++;

    this.itemPreSavedQuantity.emit({
      book: this.cartItem._id,
      quantity: this.count,
    });
  }

  decrement(): void {
    if (this.count > 1) {
      this.decrementCount = this.decrementCount + 1;
      this.incrementCount--;

      this.count--;

      this.itemPreSavedQuantity.emit({
        book: this.cartItem._id,
        quantity: this.count,
      });
    }
  }
}
