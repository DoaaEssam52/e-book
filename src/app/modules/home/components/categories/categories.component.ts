import { Component } from '@angular/core';
import { BookService } from '../../../../modules/shared/services/book.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(private _book: BookService) {}

  categories = [
    {
      name: 'Higher Education',
      imgSrc:
        'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/category_fantasy.jpg',
    },
    {
      name: 'Management Books',
      imgSrc:
        'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/category_fantasy.jpg',
    },
    {
      name: 'Adventure',
      imgSrc:
        'https://subsolardesigns.com/leona/wp-content/uploads/2019/04/category_adventure2.jpg',
    },
  ];

  ngOnInit(): void {
    this._book.getAllCategories().subscribe({
      next: (res) => {
      },
    });
  }
}
