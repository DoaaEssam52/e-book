import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  cards = [
    {
      imgSrc: 'about-us-2.jpg',
      service: 'Fast Delivery',
      type: 'Quick Shipping',
    },
    {
      imgSrc: 'about-us-3.jpg',
      service: 'Customer Support',
      type: '24/7 Help',
    },
    {
      imgSrc: 'about-us-4.jpg',
      service: 'Wide Selection',
      type: 'Variety Books',
    },
    {
      imgSrc: 'about-us-5.jpg',
      service: 'Easy Returns',
      type: 'Hassle-Free',
    },
  ];
}
