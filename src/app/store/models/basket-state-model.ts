import { BasketItem } from './basket-item-model';

export interface BasketState {
  loading: boolean;
  error: string;
  _id: string;
  items: BasketItem[];
  totalPrice: number;
  totalItemsCount: number;
}
