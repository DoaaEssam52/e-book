import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Book } from '../../../../../modules/shared/models/book.model';

@Component({
  selector: 'app-best-sellers-books',
  templateUrl: './best-sellers-books.component.html',
  styleUrls: ['./best-sellers-books.component.scss'],
})
export class BestSellersBooksComponent {
  @Input() bestSellBooks!: Book[];

  constructor(private _router: Router) {}

  viewDetails(id: string): void {
    this._router.navigateByUrl('shop/' + id + '/details');
  }
}
