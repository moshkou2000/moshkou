import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpirationComponent } from './expiration.component';

const routes: Routes = [{ path: '', component: ExpirationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpirationRoutingModule {}
