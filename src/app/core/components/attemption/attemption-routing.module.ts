import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttemptionComponent } from './attemption.component';

const routes: Routes = [{ path: '', component: AttemptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttemptionRoutingModule {}
