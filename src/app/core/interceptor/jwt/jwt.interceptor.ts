import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../../models/user.model';
import { DEFAULT_URL } from '../../constants/url';
import { Util } from '../../utils/util';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    /*
      Content-Type & Accept:
        application/json
        application/x-www-form-urlencoded
        text/plain
        text/html
        multipart/form-data
    */

    let headers: any = {};

    headers['Content-Type'] = request.headers.has('Content-Type')
      ? request.headers.get('Content-Type')
      : 'application/json';
    headers['Accept'] = request.headers.has('Accept')
      ? request.headers.get('Accept')
      : 'application/json';

    if (request.url.indexOf(environment.base_url) > -1) {
      headers['app-key'] = environment.app_key;
    }

    if (Object.values(DEFAULT_URL).indexOf(request.url) > -1) {
      let user: UserModel | undefined = Util.user;
      if (user && user.token) {
        headers['Authorization'] = `Bearer ${user.token}`;
      }
    }

    request = request.clone({
      setHeaders: headers,
    });

    return next.handle(request);
  }
}
