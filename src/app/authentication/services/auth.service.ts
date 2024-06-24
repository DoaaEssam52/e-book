import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authBaseUrl = 'auth';

  constructor(private _httpClient: HttpClient) {}

  // HTTP Requests
  login(form: any): Observable<any> {
    return this._httpClient.post(
      `${this.authBaseUrl}/${environment.login}`,
      form
    );
  }

  register(form: any): Observable<any> {
    return this._httpClient.post(
      `${this.authBaseUrl}/${environment.register}`,
      form
    );
  }

  forgetPassword(form: any): Observable<any> {
    return this._httpClient.post(
      `${this.authBaseUrl}/${environment.forgetPassword}`,
      form
    );
  }

  resetPassword(form: any): Observable<any> {
    return this._httpClient.post(
      `${this.authBaseUrl}/${environment.resetPassword}`,
      form
    );
  }
}
