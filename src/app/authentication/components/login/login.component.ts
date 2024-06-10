import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

import { AuthValidations } from '../../validations/auth-validations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../../styles/auth.scss', './login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(AuthValidations.password.minLength),
      Validators.pattern(AuthValidations.password.pattern),
    ]),
  });

  constructor(private _auth: AuthService, private _snackBar: MatSnackBar) {}

  submitLogin(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this._auth.login(this.loginForm.value).subscribe({
        next: () =>
          this._snackBar.open('Successfully login', 'close', {
            duration: 3000,
          }),
      });
    }
  }
}
