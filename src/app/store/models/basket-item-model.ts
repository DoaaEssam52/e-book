export interface BasketItem {
  book:
    | string
    | {
        _id: string;
        price: number;
      };
  quantity: number;
  _id?: string;
}
