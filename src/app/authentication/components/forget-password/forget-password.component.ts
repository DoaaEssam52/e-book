import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./../../styles/auth.scss', './forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private _auth: AuthService,
    private _snackBar: MatSnackBar,
    private route: Router
  ) {}

  submit(): void {
    this.forgetPasswordForm.markAllAsTouched();

    if (this.forgetPasswordForm.valid) {
      this._auth.forgetPassword(this.forgetPasswordForm.value).subscribe({
        next: () => {
          console.log('d5lll');
          this.route.navigateByUrl('/auth/reset-password');
        },
        error: (error) => {
          const errorMessages = error.message
            ? [error.message]
            : error.error?.message
            ? error.error?.message
            : [];

          console.log('errorMessages', errorMessages);

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
