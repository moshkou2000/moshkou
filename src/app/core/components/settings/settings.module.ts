import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';


@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatButtonModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
