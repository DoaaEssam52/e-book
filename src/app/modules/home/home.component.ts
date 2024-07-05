import { Component, OnInit } from '@angular/core';

import { BookService } from '../shared/services/book.service';

import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newBooks!: Book[];

  constructor(private _book: BookService) {}

  ngOnInit(): void {
    this._book.getAllBooks().subscribe({
      next: (res) => {
        const limit = res.total > 3 ? 3 : res.total;

        this.newBooks = res.data.slice(0, limit);
      },
    });
  }
}
