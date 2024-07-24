import { BasketItem } from '../../../../store/models/basket-item-model';

export interface UpdateBasketResponseData {
  _id: string;
  customer: string;
  items: BasketItem[];
  total: number;
  updatedAt: string;
  createdAt: string;
}

export interface UpdateBasketResponse {
  data: UpdateBasketResponseData;
  message: string;
  code: number;
  status: string;
  timestamp: string;
}
