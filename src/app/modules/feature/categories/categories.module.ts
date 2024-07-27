import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';

import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryBannerComponent } from './components/category-banner/category-banner.component';
import { CategoriesComponent } from './categories.component';

@NgModule({
  declarations: [
    CategoryCardComponent,
    CategoryListComponent,
    CategoryBannerComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, SharedModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
