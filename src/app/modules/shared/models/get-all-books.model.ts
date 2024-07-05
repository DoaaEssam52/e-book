import { Book } from './book.model';

export interface GetAllBooks {
  data: Book[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  page: number;
  total: number;
}
