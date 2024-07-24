import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth.service';

import { Register } from '../../models/register-model';

import { Validations } from '../../../../shared/validations/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './../../authentication.component.scss',
    './register.component.scss',
  ],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(Validations.firstName.minLength),
      Validators.maxLength(Validations.firstName.maxLength),
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(Validations.firstName.minLength),
      Validators.maxLength(Validations.firstName.maxLength),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(Validations.password.minLength),
      Validators.pattern(Validations.password.pattern),
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
      this._auth.register(this.registerForm.value as Register).subscribe({
        next: () => {
          this._snackBar.open(
            'You have successfully created a new account',
            'close',
            {
              duration: 3000,
            }
          ),
            this.route.navigateByUrl('home');
        },
      });
    }
  }
}
