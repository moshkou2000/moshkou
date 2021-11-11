import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
