import { Book } from '../../modules/shared/models/book.model';

export interface CartItem {
  book: Book;
  count: number;
}
