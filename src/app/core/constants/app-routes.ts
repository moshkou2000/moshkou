import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth/auth.guard';
import { UnauthGuard } from '../guards/unauth/unauth.guard';

export const INITIIAL_ROUTE: string = '/home';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: INITIIAL_ROUTE,
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../components/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
    data: {
      hasHeader: true,
      hasFooter: true,
    },
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('../components/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    data: {
      hasHeader: true,
    },
  },
  {
    path: 'datatable',
    loadChildren: () =>
      import('../../shared/datatable/datatable.module').then(
        (m) => m.DatatableModule
      ),
    data: {
      hasHeader: true,
    },
  },
  {
    path: 'error',
    loadChildren: () =>
      import('../components/error/error.module').then((m) => m.ErrorModule),
    data: {},
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../components/login/login.module').then((m) => m.LoginModule),
    canActivate: [UnauthGuard],
    data: {},
  },
  {
    path: 'tips',
    loadChildren: () =>
      import('../components/tips/tips.module').then((m) => m.TipsModule),
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
