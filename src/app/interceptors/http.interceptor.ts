import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const baseUrl = 'https://upskilling-egypt.com:3007/api';

    let newRequest = request.clone({
      url: baseUrl + '/' + request.url,
    });

    return next.handle(newRequest);
  }
}
