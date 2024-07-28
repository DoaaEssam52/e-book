import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { State } from '../../../../../store/models/state-model';

import { getUserDataRequest } from 'src/app/store/actions/auth-action';

import { Validations } from '../../../../shared/validations/validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './../../authentication.component.scss',
    './login.component.scss',
  ],
})
export class LoginComponent {
  passwordVisible = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(Validations.password.minLength),
      Validators.pattern(Validations.password.pattern),
    ]),
  });

  constructor(private store: Store<State>) {}

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  submitLogin(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.store.dispatch(getUserDataRequest(this.loginForm.value));
    }
  }
}
