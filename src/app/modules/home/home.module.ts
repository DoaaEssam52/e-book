import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';
import { BooksModule } from '../books/books.module';

import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { BestSellersBooksComponent } from './components/best-sellers-books/best-sellers-books.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeatureBooksComponent } from './components/feature-books/feature-books.component';
import { NewBooksComponent } from './components/new-books/new-books.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    BestSellersBooksComponent,
    CategoriesComponent,
    FeatureBooksComponent,
    NewBooksComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, BooksModule],
})
export class HomeModule {}
