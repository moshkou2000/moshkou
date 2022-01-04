import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../../models/response.model';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';
import { Temp } from '../../temp/temp';
import { Util } from '../../utils/util';

@Injectable({
  providedIn: 'root',
})
export class BaseInterceptor implements HttpInterceptor {
  constructor(private router: Router, private snackbar: MatSnackBar) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const started = Date.now();

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
          this.snackbar.openFromComponent(SnackbarComponent, {
            data: 'The authentication session has expired. please Sign in again.',
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });

          Util.clear();
          this.router.navigate(['/login']);
        }

        return throwError(new ResponseModel(error));
      })
      // finalize(() => {
      //   if (!environment.production) {
      //     const elapsed = Date.now() - started;
      //     const msg = `${request.method} ${request.url} ${request.params} ${elapsed} ms.`;
      //     console.log('::BaseInterceptor: ', msg, request);
      //   }
      // })
    );
  }
}
