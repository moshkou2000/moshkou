import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/components/error/error.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';

import { AuthGuard } from './core/guards/auth/auth.guard';
import { UnauthGuard } from './core/guards/unauth/unauth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./core/components/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
    data: {
      hasHeader: true,
      hasFooter: true,
    },
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./core/components/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    data: {},
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./core/components/error/error.module').then((m) => m.ErrorModule),
    data: {},
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/components/login/login.module').then((m) => m.LoginModule),
    canActivate: [UnauthGuard],
    data: {},
  },
  {
    path: 'tips',
    loadChildren: () =>
      import('./core/components/tips/tips.module').then((m) => m.TipsModule),
    canActivate: [AuthGuard],
    data: {
      hasHeader: true,
    },
  },
  {
    path: '**',
    redirectTo: '/error',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
