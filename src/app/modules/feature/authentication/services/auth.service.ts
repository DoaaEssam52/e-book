import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from '../models/login-model';
import { LoginResponse } from '../models/login-response-model';
import { Register } from '../models/register-model';
import { RegisterResponse } from '../models/register-response-model';
import { ForgetPassword } from '../models/forget-password-model';
import { ForgetPasswordResponse } from '../models/forget-password-response-model';
import { ResetPassword } from '../models/reset-password-model';
import { ResetPasswordResponse } from '../models/reset-password-response-model';

import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  // HTTP Requests
  login(form: Login): Observable<LoginResponse> {
    return this._httpClient.post<LoginResponse>(
      `${environment.authBaseUrl}/${environment.login}`,
      form
    );
  }

  register(form: Register): Observable<RegisterResponse> {
    return this._httpClient.post<RegisterResponse>(
      `${environment.authBaseUrl}/${environment.register}`,
      form
    );
  }

  forgetPassword(form: ForgetPassword): Observable<ForgetPasswordResponse> {
    return this._httpClient.post<ForgetPasswordResponse>(
      `${environment.authBaseUrl}/${environment.forgetPassword}`,
      form
    );
  }

  resetPassword(form: ResetPassword): Observable<ResetPasswordResponse> {
    return this._httpClient.post<ResetPasswordResponse>(
      `${environment.authBaseUrl}/${environment.resetPassword}`,
      form
    );
  }
}
