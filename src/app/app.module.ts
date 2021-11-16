import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationComponent } from './shared/components/confirmation/confirmation.component';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';
import { SharedModule } from './shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, ConfirmationComponent, SnackbarComponent],
  entryComponents: [ConfirmationComponent, SnackbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
