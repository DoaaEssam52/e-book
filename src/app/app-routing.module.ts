import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/feature/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
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
    path: 'cart',
    loadChildren: () =>
      import('./modules/feature/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./modules/feature/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
