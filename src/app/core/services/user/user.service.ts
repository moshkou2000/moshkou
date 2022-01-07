import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GetArguments } from '../../arguments/arguments';
import { DEFAULT_URL, TOKENLESS_URL } from '../../constants/url';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(body: any): Observable<any> {
    return this.http.post<any>(TOKENLESS_URL.login, body).pipe(
      map((data) => data),
      catchError((err: any) => observableOf(err))
    );
  }

  register(body: any): Observable<any> {
    return this.http.post<any>(TOKENLESS_URL.register, body).pipe(
      map((data) => data),
      catchError((err: any) => observableOf(err))
    );
  }

  verify(body: any): Observable<any> {
    return this.http.post<any>(TOKENLESS_URL.verify, body).pipe(
      map((data) => data),
      catchError((err: any) => observableOf(err))
    );
  }

  confirm(body: any): Observable<any> {
    return this.http.post<any>(TOKENLESS_URL.confirm, body).pipe(
      map((data) => data),
      catchError((err: any) => observableOf(err))
    );
  }

  prove(body: any): Observable<any> {
    return this.http.post<any>(TOKENLESS_URL.prove, body).pipe(
      map((data) => data),
      catchError((err: any) => observableOf(err))
    );
  }

  getProfile(): Observable<any> {
    return this.http.get<any>(DEFAULT_URL.profile).pipe(
      map((data) => data),
      catchError((err: any) => observableOf(err))
    );
  }

  updateProfile(body: any): Observable<any> {
    return this.http.put<any>(DEFAULT_URL.profile, body).pipe(
      map((data) => data),
      catchError((err: any) => observableOf(err))
    );
  }
}
