import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(path: string): Observable<any> {
    return this.http.get(`${environment.api_uri}${path}`)
      .pipe(
        catchError(err => {
          // console.error('error loading the list of users', err);
          return of(err);
        }));
  }

  post(path: string, body): Observable<any> {
    return this.http.post(`${environment.api_uri}${path}`, body)
      .pipe(
        catchError(err => {
          // console.error('Error: ', err);
          return of(err);
        }));
  }

  patch(path: string, body): Observable<any> {
    return this.http.patch(`${environment.api_uri}${path}`, body)
      .pipe(
        catchError(err => {
          // console.error('Error: ', err);
          return of(err);
        }));
  }
}
