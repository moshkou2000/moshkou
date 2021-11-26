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
import { DatatableModule } from './shared/datatable/datatable.module';

@NgModule({
  declarations: [AppComponent, ConfirmationComponent, SnackbarComponent],
  entryComponents: [ConfirmationComponent, SnackbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatatableModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
