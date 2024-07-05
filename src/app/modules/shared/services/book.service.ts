import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GetAllBooks } from '../models/get-all-books.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private _httpClient: HttpClient) {}

  // HTTP Requests
  getAllBooks(): Observable<GetAllBooks> {
    return this._httpClient.get<GetAllBooks>(`${environment.getAllBooks}`);
  }

  getAllCategories(): Observable<any> {
    return this._httpClient.get(`${environment.getAllCategories}`);
  }
}
