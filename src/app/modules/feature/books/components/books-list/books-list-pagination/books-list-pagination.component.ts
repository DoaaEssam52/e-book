import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-books-list-pagination',
  templateUrl: './books-list-pagination.component.html',
  styleUrls: ['./books-list-pagination.component.scss'],
})
export class BooksListPaginationComponent implements OnInit, OnDestroy {
  @Output() pageIndexEmitter = new EventEmitter();

  @Input() length!: number;
  @Input() pageSize!: number;

  pageIndex = 0;
  hidePageSize = true;
  showPageSizeOptions = false;
  showFirstLastButtons = true;
  disabled = false;

  ngOnInit(): void {
    this.pageIndexEmitter.emit(this.pageIndex);
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex;

    this.pageIndexEmitter.emit(this.pageIndex);
  }

  ngOnDestroy(): void {
    this.pageIndexEmitter.unsubscribe();
  }
}
