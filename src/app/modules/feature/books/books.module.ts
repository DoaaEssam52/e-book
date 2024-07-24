import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { PriceRangePipe } from './pipes/price-range.pipe';

import { CategoryCardComponent } from './components/category-card/category-card.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksBannerComponent } from './components/books-list/books-banner/books-banner.component';
import { BooksFilterComponent } from './components/books-list/books-filter/books-filter.component';
import { BooksListPaginationComponent } from './components/books-list/books-list-pagination/books-list-pagination.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [
    PriceRangePipe,
    CategoryCardComponent,
    BooksListComponent,
    BooksBannerComponent,
    BooksFilterComponent,
    BooksListPaginationComponent,
    BookDetailsComponent,
    BooksComponent,
  ],
  imports: [CommonModule, BooksRoutingModule, SharedModule],
  exports: [CategoryCardComponent],
})
export class BooksModule {}
