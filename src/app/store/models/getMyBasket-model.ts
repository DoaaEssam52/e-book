import { BasketItem } from './basket-item-model';

export interface GetMyBasket {
  _id: string;
  customer: string;
  items: BasketItem[];
  total: number;
}
