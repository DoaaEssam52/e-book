import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
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
}
