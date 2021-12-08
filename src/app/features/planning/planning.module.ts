import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { DatatableModule } from 'src/app/shared/datatable/datatable.module';

@NgModule({
  imports: [CommonModule, DatatableModule, PlanningRoutingModule],
  declarations: [PlanningComponent],
})
export class PlanningModule {}
