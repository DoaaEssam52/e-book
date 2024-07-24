import { Component } from '@angular/core';
import { data } from 'jquery';

@Component({
  selector: 'app-our-information',
  templateUrl: './our-information.component.html',
  styleUrls: ['./our-information.component.scss'],
})
export class OurInformationComponent {
  information = [
    {
      title: 'Address',
      data: '18 Roxi Cairo, Egypt',
      icon: 'location_on',
    },
    { title: 'Phone', data: '+123456789', icon: 'smartphone' },
    {
      title: 'Email',
      data: 'doaa.essam281@gmail.com',
      icon: 'mail',
    },
  ];
}
