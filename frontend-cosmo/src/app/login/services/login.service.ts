import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../models/ILogin.models';
import { RoutesApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  urlApi = RoutesApi;
  constructor(private http: HttpClient) {}
  /* AUTH LOGIN */
  postAuthLogin(form: ILogin): Observable<any> {
    return this.http.post<any>(this.urlApi.urlApi + this.urlApi.auth, form);
  }

  setAuthToken(token: string) {
    localStorage.setItem('token', token);
  }

  getAuthToken(): string {
    return localStorage.getItem('token');
  }
}
