import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth.service';

import { AuthValidations } from '../../validations/auth-validations';

import { ResetPassword } from '../../models/reset-password-model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./../../styles/auth.scss', './reset-password.component.scss'],
})
export class ResetPasswordComponent {
  resetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    otp: new FormControl('', [
      Validators.required,
      Validators.pattern(AuthValidations.otp.pattern),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(AuthValidations.password.minLength),
      Validators.pattern(AuthValidations.password.pattern),
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
      this._auth
        .resetPassword(this.resetPasswordForm.value as ResetPassword)
        .subscribe({
          next: () => {
            this._snackBar.open('Password is rested successfully', 'close', {
              duration: 3000,
            });

            this.route.navigateByUrl('home');
          },
          error: (error) => {
            const errorMessages = error.message
              ? [error.message]
              : error.error?.message
              ? error.error?.message
              : [];

            errorMessages.forEach((msg: string) => {
              this._snackBar.open(msg, 'close', {
                duration: 3000,
              });
            });
          },
        });
    }
  }
}
