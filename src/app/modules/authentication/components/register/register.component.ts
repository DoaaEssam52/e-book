import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

import { AuthValidations } from '../../validations/auth-validations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../../styles/auth.scss', './register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(AuthValidations.firstName.minLength),
      Validators.maxLength(AuthValidations.firstName.maxLength),
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(AuthValidations.firstName.minLength),
      Validators.maxLength(AuthValidations.firstName.maxLength),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(AuthValidations.password.minLength),
      Validators.pattern(AuthValidations.password.pattern),
    ]),
    role: new FormControl('', Validators.required),
  });

  constructor(
    private _auth: AuthService,
    private _snackBar: MatSnackBar,
    private route: Router
  ) {}

  submitRegister(): void {
    this.registerForm.markAllAsTouched();

    if (this.registerForm.valid) {
      this._auth.register(this.registerForm.value).subscribe({
        next: () => {
          this._snackBar.open(
            'You have successfully created a new account',
            'close',
            {
              duration: 3000,
            }
          ),
            this.route.navigateByUrl('landing');
        },
      });
    }
  }
}
