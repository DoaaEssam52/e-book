import { CategoryState } from './category-state-model';
import { AuthState } from './auth-state-model';
import { BasketState } from './basket-state-model';
import { BooksState } from './books-state-model';

export interface State {
  authData: AuthState;
  basketData: BasketState;
  categoriesData: CategoryState;
  booksData: BooksState;
}
