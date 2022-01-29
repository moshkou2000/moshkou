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
      hasMainnav: true,
      hasSidenav: true,
      hasHeader: true,
      hasFooter: true,
    },
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../components/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
    canActivate: [AuthGuard],
    data: {
      hasSidenav: true,
      hasHeader: true,
    },
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('../components/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    canActivate: [AuthGuard],
    data: {
      hasHeader: true,
      hasMainnav: true,
    },
  },
  {
    path: 'error',
    loadChildren: () =>
      import('../components/error/error.module').then((m) => m.ErrorModule),
    data: {},
  },
  {
    path: 'help',
    loadChildren: () =>
      import('../components/help/help.module').then((m) => m.HelpModule),
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
    path: 'registration',
    loadChildren: () =>
      import('../components/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
    canActivate: [UnauthGuard],
    data: {},
  },
  {
    path: 'verification',
    loadChildren: () =>
      import('../components/verification/verification.module').then(
        (m) => m.VerificationModule
      ),
    canActivate: [UnauthGuard],
    data: {},
  },
  {
    path: 'confirmation',
    loadChildren: () =>
      import('../components/confirmation/confirmation.module').then(
        (m) => m.ConfirmationModule
      ),
    canActivate: [UnauthGuard],
    data: {},
  },
  {
    path: 'attemption',
    loadChildren: () =>
      import('../components/attemption/attemption.module').then(
        (m) => m.AttemptionModule
      ),
    canActivate: [UnauthGuard],
    data: {},
  },
  {
    path: 'expiration',
    loadChildren: () =>
      import('../components/expiration/expiration.module').then(
        (m) => m.ExpirationModule
      ),
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
      hasMainnav: true,
    },
  },
  {
    path: 'planning',
    loadChildren: () =>
      import('../../features/planning/planning.module').then(
        (m) => m.PlanningModule
      ),
    canActivate: [AuthGuard],
    data: {
      hasSidenav: true,
      hasHeader: true,
    },
  },
  {
    path: '**',
    redirectTo: '/error',
    pathMatch: 'full',
  },
];
