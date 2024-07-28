import { Component, EventEmitter, Output } from '@angular/core';

import { Store } from '@ngrx/store';

import { clearUserTokenAndData } from './../../../../../../../store/actions/auth-action';

import { State } from './../../../../../../../store/models/state-model';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss'],
})
export class LogoutModalComponent {
  @Output() closeModal = new EventEmitter();

  constructor(private store: Store<State>) {}

  logout(): void {
    this.store.dispatch(clearUserTokenAndData());

    this.closeModal.emit();
  }
}
