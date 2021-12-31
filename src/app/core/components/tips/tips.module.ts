import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TipsComponent } from './tips.component';
import { TipsRoutingModule } from './tips-routing.module';

@NgModule({
  imports: [CommonModule, TipsRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [TipsComponent],
})
export class TipsModule {}
