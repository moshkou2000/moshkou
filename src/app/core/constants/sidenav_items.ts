import { ISidenav } from '../interfaces/isidenav';

export const SIDENAV_ITEMS: ISidenav[] = [
  {
    label: 'Main',
    imageIcon: 'assets/logo.png',
    children: [
      {
        label: 'Home',
        link: 'home',
      },
      {
        label: 'Settings',
        link: 'settings',
      },
      {
        label: 'Tips',
        link: 'tips',
      },
      {
        label: 'Datatable',
        link: 'datatable',
      },
    ],
  },
  {
    label: 'Sample :D',
  },
  {
    label: 'Settings',
    link: 'settings',
  },
  {
    label: 'Login',
    link: 'login',
    icon: 'login',
  },
];
