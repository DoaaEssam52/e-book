import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-us-card',
  templateUrl: './about-us-card.component.html',
  styleUrls: ['./about-us-card.component.scss'],
})
export class AboutUsCardComponent {
  @Input() imgSrc!: string;
  @Input() service!: string;
  @Input() type!: string;
}
