// import { CartItem } from 'src/app/modules/shared/models/cart-item.model';

import { CategoryState } from './category-state-model';
import { AuthState } from './auth-state-model';
import { GetMyBasket } from './getMyBasket-model';

export interface State {
  authData: AuthState;
  basketData: GetMyBasket;
  categoriesData: CategoryState;
}
