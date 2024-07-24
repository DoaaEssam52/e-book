// import { CartItem } from 'src/app/modules/shared/models/cart-item.model';

import { BooksState } from './books-state-model';
import { CategoryState } from './category-state-model';
import { AuthState } from './auth-state-model';
import { NavbarState } from './navbar-state.model';
import { GetMyBasket } from './getMyBasket-model';

export interface State {
  authData: AuthState;
  basketData: GetMyBasket;
  booksData: BooksState;
  categoriesData: CategoryState;
  navbarDate: NavbarState;
}
