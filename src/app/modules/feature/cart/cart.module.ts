import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { CartComponent } from './cart.component';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';

@NgModule({
  declarations: [CartComponent, EmptyCartComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}
