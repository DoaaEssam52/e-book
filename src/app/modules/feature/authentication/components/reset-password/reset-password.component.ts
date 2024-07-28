import { Component, OnDestroy } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth.service';

import { Validations } from '../../../../shared/validations/validations';

import { ResetPassword } from '../../models/reset-password-model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: [
    './../../authentication.component.scss',
    './reset-password.component.scss',
  ],
})
export class ResetPasswordComponent implements OnDestroy {
  resetPasswrodSubscription!: Subscription;

  resetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    otp: new FormControl('', [
      Validators.required,
      Validators.pattern(Validations.otp.pattern),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(Validations.password.minLength),
      Validators.pattern(Validations.password.pattern),
    ]),
  });

  constructor(
    private _auth: AuthService,
    private _snackBar: MatSnackBar,
    private route: Router
  ) {}

  submit(): void {
    this.resetPasswordForm.markAllAsTouched();

    if (this.resetPasswordForm.valid) {
      this.resetPasswrodSubscription = this._auth
        .resetPassword(this.resetPasswordForm.value as ResetPassword)
        .subscribe({
          next: () => {
            this._snackBar.open('Password is rested successfully', 'close', {
              duration: 3000,
            });

            this.route.navigateByUrl('home');
          },
        });
    }
  }

  ngOnDestroy(): void {
    //Unsubscribe from all subscriptions to prevent memory leaks
    if (this.resetPasswrodSubscription) {
      this.resetPasswrodSubscription.unsubscribe();
    }
  }
}
