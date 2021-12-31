import { NavItemModel } from '../models/navitem.model';

export const SIDENAV_ITEMS: NavItemModel[] = [
  new NavItemModel(<NavItemModel>{
    label: 'Main',
    imageIcon: 'assets/logo.png',
    children: [
      new NavItemModel(<NavItemModel>{
        label: 'Home',
        link: 'home',
      }),
      new NavItemModel(<NavItemModel>{
        label: 'Tips',
        link: 'tips',
      }),
      new NavItemModel(<NavItemModel>{
        label: 'Datatable',
        link: 'datatable',
      }),
    ],
  }),
  new NavItemModel(<NavItemModel>{
    label: 'Sample',
  }),
  new NavItemModel(<NavItemModel>{
    label: 'Profile',
    link: 'profile',
  }),
  new NavItemModel(<NavItemModel>{
    label: 'Settings',
    link: 'settings',
  }),
  new NavItemModel(<NavItemModel>{
    label: 'Planning',
    link: 'planning',
  }),
];
