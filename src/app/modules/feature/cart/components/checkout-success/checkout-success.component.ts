import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss'],
})
export class CheckoutSuccessComponent {
  @Output() closeModal = new EventEmitter();

  close(): void {
    this.closeModal.emit();
  }
}
