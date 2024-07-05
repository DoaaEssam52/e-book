import { CartItem } from '../../modules/shared/models/cart-item.model';

export const CartItemsSelector = (state: { cartItems: CartItem[] }) =>
  state.cartItems;
