import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GetArguments } from '../../arguments/arguments';
import { CONSTANT_NUMBERS } from '../../constants/constant_numbers';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  constructor(private http: HttpClient) {}

  post(body: any): Observable<any> {
    return this.http.post<any>(environment.default_url.sample, body).pipe(
      map((data) => data),
      catchError((err: any) => observableOf(err))
    );
  }

  get(arg: GetArguments): Observable<any> {
    let requestUrl: string = `${environment.default_url.sample}?page=${
      arg?.page ?? 1
    }&per_page=${arg?.size ?? CONSTANT_NUMBERS.defaultPageSize}`;
    if (arg?.filter) requestUrl += `&q=${arg?.filter}`;
    if (arg?.sort) requestUrl += `&sort=${arg?.sort}`;
    if (arg?.order) requestUrl += `&order=${arg?.order}`;

    return this.http.get<any>(requestUrl).pipe(
      map((data) => data),
      catchError((err: any) => observableOf(err))
    );
  }

  put(id: string, body: any): Observable<any> {
    const requestUrl: string = `${environment.default_url.sample}/${id}`;

    return this.http.put<any>(requestUrl, body).pipe(
      map((data) => data),
      catchError((err: any) => observableOf(err))
    );
  }

  delete(id: string): Observable<any> {
    const requestUrl: string = `${environment.default_url.sample}/${id}`;

    return this.http.delete<any>(requestUrl).pipe(
      map((data) => data),
      catchError((err: any) => observableOf(err))
    );
  }
}
