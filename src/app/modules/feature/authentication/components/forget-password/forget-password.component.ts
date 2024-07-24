import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { ForgetPassword } from '../../models/forget-password-model';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: [
    './../../authentication.component.scss',
    './forget-password.component.scss',
  ],
})
export class ForgetPasswordComponent {
  forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private _auth: AuthService,
    private route: Router
  ) {}

  submit(): void {
    this.forgetPasswordForm.markAllAsTouched();

    if (this.forgetPasswordForm.valid) {
      this._auth
        .forgetPassword(this.forgetPasswordForm.value as ForgetPassword)
        .subscribe({
          next: () => {
            this.route.navigateByUrl('/auth/reset-password');
          },
        });
    }
  }
}
