import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
