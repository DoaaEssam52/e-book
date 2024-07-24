import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rotating-book',
  templateUrl: './rotating-book.component.html',
  styleUrls: ['./rotating-book.component.scss'],
})
export class RotatingBookComponent {
  @Input() imgSrc: string = '';
}
