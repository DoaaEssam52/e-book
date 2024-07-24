import { Component, HostListener, Input } from '@angular/core';

import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

import { Book } from '../../../../shared/models/book.model';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.scss'],
  animations: [],
})
export class NewBooksComponent {
  @Input() newBooks: Book[] = [];
  animateSection = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.querySelector('.new-books') as HTMLElement;
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    if (rect.top <= viewHeight && rect.bottom >= 0) {
      this.animateSection = true;
    }
  }
}
