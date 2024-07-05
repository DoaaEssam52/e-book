import { Component } from '@angular/core';

import { BookService } from '../../../../modules/shared/services/book.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  constructor(private _book: BookService) {}

  ngOnInit(): void {
    this._book.getAllCategories().subscribe((res) => {
    });
  }
}
