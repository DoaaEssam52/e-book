import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { BasketSelector } from '../../../../../store/selectors/basket-selector';

import { State } from '../../../../../store/models/state-model';
import { updateBasket } from 'src/app/store/actions/basket-action';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./../../cart.component.scss', './cart-footer.component.scss'],
})
export class CartFooterComponent implements OnInit, OnDestroy {
  @ViewChild('successCheckoutModal') successCheckoutModal!: TemplateRef<any>;

  @Output() resetCart = new EventEmitter();

  @Input() orderId!: string;

  totalPrice!: number;

  getCartSubscription!: Subscription;

  constructor(private store: Store<State>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.getCartSubscription = this.store.select(BasketSelector).subscribe({
      next: ({ totalPrice }) => {
        this.totalPrice = totalPrice;
      },
    });
  }

  openSuccessCheckoutModal(): void {
    this.dialog.open(this.successCheckoutModal);
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  checkout(): void {
    if (this.orderId) {
      this.store.dispatch(updateBasket({ items: [], _id: this.orderId }));
    }

    setTimeout(() => {
      this.openSuccessCheckoutModal();
    }, 1000);
  }

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    this.getCartSubscription.unsubscribe();
  }
}
