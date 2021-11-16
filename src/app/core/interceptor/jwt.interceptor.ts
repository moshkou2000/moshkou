import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { GeneralService } from '../services/general/general.service';
import { UserModel } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private generalService: GeneralService) {}

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

    if (Object.values(environment.default_api).indexOf(request.url) > -1) {
      let user: UserModel | undefined = this.generalService.getUser();
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
