import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';

import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';

import { CarouselModule } from 'primeng/carousel'; // Import CarouselModule
import { ButtonModule } from 'primeng/button'; // Import ButtonModule if you need to use buttons in the carousel

import { ImgPathPipe } from './pipes/img-path.pipe';
import { ErrorMessagesPipe } from './pipes/error-messages.pipe';
import { FilterByKeyPipe } from './pipes/filter-by-key.pipe';

import { HandleActiveRouteDirective } from './directives/handle-active-route.directive';
import { ScreenSizeDirective } from './directives/screen-size.directive';

import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BookCardComponent } from './components/books/book-card/book-card.component';
import { CartItemCounterComponent } from './components/cart/cart-item-counter/cart-item-counter.component';
import { SpinnerComponent } from './components/layout/spinner/spinner.component';
import { RotatingBookComponent } from './components/books/rotating-book/rotating-book.component';
import { WisdomComponent } from './components/layout/wisdom/wisdom.component';

@NgModule({
  declarations: [
    ImgPathPipe,
    ErrorMessagesPipe,
    FilterByKeyPipe,
    NavbarComponent,
    FooterComponent,
    BookCardComponent,
    CartItemCounterComponent,
    SpinnerComponent,
    RotatingBookComponent,
    HandleActiveRouteDirective,
    WisdomComponent,
    ScreenSizeDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    CarouselModule,
    ButtonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatBadgeModule,
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    CarouselModule,
    ButtonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatBadgeModule,
    ImgPathPipe,
    ErrorMessagesPipe,
    FilterByKeyPipe,
    HandleActiveRouteDirective,
    ScreenSizeDirective,
    NavbarComponent,
    FooterComponent,
    BookCardComponent,
    CartItemCounterComponent,
    SpinnerComponent,
    RotatingBookComponent,
    WisdomComponent,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 2500, horizontalPosition: 'right' },
    },
  ],
})
export class SharedModule {}
