import { Book } from './book.model';

export interface CartItem {
  book: Book;
  count: number;
}
