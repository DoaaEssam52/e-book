import { BasketItem } from '../../../../store/models/basket-item-model';

export interface GetBasketResponse {
  _id: string;
  customer: string;
  items: BasketItem[];
  total: number;
}
