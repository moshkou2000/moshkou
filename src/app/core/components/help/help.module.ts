import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HelpComponent } from './help.component';
import { HelpRoutingModule } from './help-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HelpRoutingModule],
  declarations: [HelpComponent],
})
export class HelpModule {}
