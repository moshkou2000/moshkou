import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationComponent } from './shared/confirmation/confirmation.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptor/jwt/jwt.interceptor';
import { BaseInterceptor } from './core/interceptor/base/base.interceptor';
import { Services, IServices } from './core/services/services.service';

@NgModule({
  declarations: [AppComponent, ConfirmationComponent, SnackbarComponent],
  entryComponents: [ConfirmationComponent, SnackbarComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
    { provide: IServices, useClass: Services },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
