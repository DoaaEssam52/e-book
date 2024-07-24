import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BasketItem } from '../../../../store/models/basket-item-model';
import { UpdateBasketResponse } from '../models/update-basket-response-model';
import { GetBasketResponse } from '../models/get-basket-response-model';

import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _httpClient: HttpClient) {}

  // HTTP Requests
  getMyBasket(): Observable<GetBasketResponse> {
    return this._httpClient.get<GetBasketResponse>(environment.getMyBasket);
  }

  updateBasket(data: any): Observable<UpdateBasketResponse> {
    console.log('data', data);
    return this._httpClient.put<UpdateBasketResponse>(
      environment.updateBasket + '/' + data._id,
      { items: data.items }
    );
  }

  incrementItem(basketItem: BasketItem): Observable<UpdateBasketResponse> {
    return this._httpClient.post<UpdateBasketResponse>(
      environment.increment,
      basketItem
    );
  }

  decrementItem(basketItem: BasketItem): Observable<UpdateBasketResponse> {
    const options = {
      body: basketItem,
    };

    return this._httpClient.delete<UpdateBasketResponse>(
      environment.decrementItem,
      options
    );
  }
}
