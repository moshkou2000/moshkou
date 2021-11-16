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

import { GeneralService } from '../services/general/general.service';
// import { SnackbarComponent } from '../../layout/snackbar/snackbar.component';
// import { ResponseModel } from '../models/users.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private snackbar: MatSnackBar,
    private generalService: GeneralService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const started = Date.now();

    return next.handle(request).pipe(
      map((data: HttpEvent<any>) => {
        if (data instanceof HttpResponse) {
          data = data.clone({
            body: 118, // new ResponseModel(data)
          });
        }
        return data;
      }),
      catchError((error) => {
        if (error.status == 401) {
          // !environment.production && this.snackbar.openFromComponent(SnackbarComponent, {
          //   data: "The authentication session has expired. please sign-in again.",
          //   duration: 3000,
          //   horizontalPosition: "center",
          //   verticalPosition: "top"
          // });

          // this.generalService.clear();
          this.router.navigate(['/login']);
        }

        // return throwError(new ResponseModel(error));
        return throwError(error);
      }),
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${request.method} ${request.url} ${request.params} ${elapsed} ms.`;
        !environment.production &&
          console.log('BaseInterceptor: ', msg, request);
      })
    );
  }
}
