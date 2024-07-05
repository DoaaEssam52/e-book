import { Component } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-best-sellers-books',
  templateUrl: './best-sellers-books.component.html',
  styleUrls: ['./best-sellers-books.component.scss'],
})
export class BestSellersBooksComponent {
  slidesStore = [
    { image: 'https://via.placeholder.com/600x400', title: 'Slide 1' },
    { image: 'https://via.placeholder.com/600x400', title: 'Slide 2' },
    { image: 'https://via.placeholder.com/600x400', title: 'Slide 3' },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
