import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    CustomerComponent,
    HomeComponent
  ],
  imports: [CommonModule, CustomerRoutingModule],
})
export class CustomerModule {}
