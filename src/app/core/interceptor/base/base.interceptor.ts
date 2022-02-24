import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponseModel } from '../../models/response.model';
import { Temp } from '../../temp/temp';
import { Util } from '../../utils/util';
import { IServices } from '../../services/services.service';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';

@Injectable({
  providedIn: 'root',
})
export class BaseInterceptor implements HttpInterceptor {
  constructor(private service: IServices, private snackbar: MatSnackBar) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((data: HttpEvent<any>) => {
        if (data instanceof HttpResponse) {
          data = data.clone({
            body: Temp.modifyGithubResponse(data),
            // body: new ResponseModel(data)
          });
        }
        return data;
      }),
      catchError((error) => {
        if ([401, 403].includes(error.status)) {
          Util.openSnackbar({
            snackbar: this.snackbar,
            data: 'The authentication session has expired. please Sign in again.',
          });
          Util.clear();
          Util.setViewStates(ViewStates.login);
          this.service.navigate(['']);
        }

        return throwError(new ResponseModel(error));
      })
    );
  }
}
