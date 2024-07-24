import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  navbarHeight: number = 0;

  getNavbarHeight(e: number): void {
    this.navbarHeight = e;
  }
}
