import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { ErrorComponent } from './error.component';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorRoutingModule,
    MatButtonModule,
  ],
  declarations: [ErrorComponent],
})
export class ErrorModule {}
