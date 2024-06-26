import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';

import { ImgPathPipe } from './pipes/img-path.pipe';
import { ErrorMessagesPipe } from './pipes/error-messages.pipe';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [ImgPathPipe, ErrorMessagesPipe, NavbarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    ImgPathPipe,
    ErrorMessagesPipe,
    NavbarComponent,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 2500, horizontalPosition: 'right' },
    },
  ],
})
export class SharedModule {}
