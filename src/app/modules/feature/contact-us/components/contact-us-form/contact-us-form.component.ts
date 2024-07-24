import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Validations } from './../../../../shared/validations/validations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
})
export class ContactUsFormComponent {
  contactUsForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(Validations.firstName.minLength),
      Validators.maxLength(Validations.firstName.maxLength),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(Validations.subject.minLength),
      Validators.maxLength(Validations.subject.maxLength),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(Validations.message.minLength),
      Validators.maxLength(Validations.message.maxLength),
    ]),
  });

  constructor(private _snackBar: MatSnackBar) {}

  submit(): void {
    this.contactUsForm.markAllAsTouched();

    if (this.contactUsForm.valid) {
      this.contactUsForm.reset();

      this._snackBar.open(
        "Thank You!! We've received your message successfully.",
        'close',
        {
          duration: 3000,
        }
      );
    }
  }
}
