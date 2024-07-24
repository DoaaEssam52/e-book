import { Book } from '../../modules/shared/models/book.model';

export interface BooksState {
  loading: boolean;
  books: Book[];
  error: string;
}
