import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatTabsModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
