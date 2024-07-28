import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { CartComponent } from './cart.component';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';
import { CartFooterComponent } from './components/cart-footer/cart-footer.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component';

@NgModule({
  declarations: [CartComponent, EmptyCartComponent, CartFooterComponent, CartDetailsComponent, CheckoutSuccessComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}
