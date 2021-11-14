import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TipsComponent } from './tips.component';
import { TipsRoutingModule } from './tips-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TipsRoutingModule],
  declarations: [TipsComponent],
})
export class TipsModule {}
