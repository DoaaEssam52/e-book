import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const baseUrl = 'https://upskilling-egypt.com:3007/api';
    const accessToken = localStorage.getItem('accessToken');

    let newRequest = request.clone({
      url: baseUrl + '/' + request.url,
      headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(newRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        // let errorStatus = error.status;

        if(error.status === 401){

        }

       
        return throwError(errorMsg);
      })
    );
  }
}
