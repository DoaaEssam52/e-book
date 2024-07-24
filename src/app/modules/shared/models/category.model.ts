import { Book } from './book.model';

export interface Category {
  _id: string;
  title: string;
  status: string;
  books: Book[];
}
