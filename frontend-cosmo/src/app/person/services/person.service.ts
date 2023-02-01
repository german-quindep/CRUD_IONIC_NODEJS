import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPerson } from '../models/Person.models';
import { Observable } from 'rxjs';
import { RoutesApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  urlApi = RoutesApi;
  constructor(private http: HttpClient) {}

  postPerson(form: IPerson): Observable<any> {
    return this.http.post<any>(this.urlApi.urlApi + this.urlApi.person.get, form);
  }
  
}
