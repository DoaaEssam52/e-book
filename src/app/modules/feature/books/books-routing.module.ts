import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { notAuthGuard } from './../../../guards/not-auth.guard';

import { BooksComponent } from './books.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BooksListComponent,
      },
      {
        path: ':id/details',
        component: BookDetailsComponent,
        canActivate: [notAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
