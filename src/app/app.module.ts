import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationComponent } from './shared/components/confirmation/confirmation.component';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';
import { DatatableModule } from './shared/components/datatable/datatable.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ConfirmationComponent, SnackbarComponent],
  entryComponents: [ConfirmationComponent, SnackbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatatableModule,
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
