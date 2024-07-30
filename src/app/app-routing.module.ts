import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { cartGuard } from './guards/cart.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/feature/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/feature/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./modules/feature/books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/feature/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./modules/feature/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./modules/feature/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/feature/cart/cart.module').then((m) => m.CartModule),
    canActivate: [cartGuard],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
