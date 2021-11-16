import { Injectable } from '@angular/core';
import { keys } from 'src/environments/environment';
import { ISidenav } from '../../interfaces/isidenav';
import { IBreadcrumb } from '../../interfaces/ibreadcrumb';
import { UserModel } from '../../models/users.model';

const sidenavItems: ISidenav[] = [
  {
    label: 'Home',
    link: 'home',
    imageIcon: 'assets/logo.png',
    children: [
      {
        label: 'Settings',
        link: 'settings',
        selected: true,
      },
      {
        label: 'Tips',
        link: 'tips',
      },
    ],
  },
  {
    label: 'Settings',
    link: 'settings',
  },
  {
    label: 'Login',
    link: 'login',
    icon: 'login',
    selected: true,
  },
];

// breadcrumbs must follow routes
// just set the direct parent into "parents"
const breadcrumbs: IBreadcrumb[] = [
  { link: 'home', label: 'Home' },
  { link: 'settings', label: 'Settings' },
  { link: 'tips', label: 'Tips', parents: [{ link: 'home', label: 'Home' }] },
  { link: 'documents', label: 'Documents' },
  { link: 'users/field_assistant', label: 'Field Assistant' },
  { link: 'users/admins', label: 'Admins' },
  {
    link: 'documents/reports',
    label: 'Reports',
    parents: [{ link: 'documents', label: 'Documents' }],
  },
  { link: 'map', label: 'Map' },
  { link: 'profile', label: 'Profile' },
  { link: 'visualisation/barchart', label: 'Barchart' },
  { link: 'visualisation/bubblemap', label: 'Bubblemap' },
  { link: 'visualisation/path-edge-bunding', label: 'Path Edge Bunding' },
  { link: 'visualisation/choropleth', label: 'Choropleth' },
  { link: 'visualisation/crossfilter', label: 'Crossfilter' },
  { link: 'visualisation/date-time-heatmap', label: 'Date Time Heatmap' },
  { link: 'visualisation/sankey', label: 'Sankey' },
  { link: 'visualisation/event-drops', label: 'Event Drops' },
];

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  breadcrumb: IBreadcrumb | undefined;
  constructor() {}

  get sidenavItems(): ISidenav[] {
    return sidenavItems;
  }
  getBreadcrumbs(link: string) {
    let breadcrumb = breadcrumbs.find((item) => {
      return item.link === link;
    });

    this.breadcrumb = breadcrumb;

    if (breadcrumb && breadcrumb.parents) {
      this.getBreadcrumb(breadcrumb.parents[0].link);
    }

    return this.breadcrumb;
  }
  getBreadcrumb(link: string): IBreadcrumb | undefined {
    let breadcrumb: IBreadcrumb | undefined = breadcrumbs.find((item) => {
      return item.link === link;
    });

    if (breadcrumb?.parents) {
      const b: IBreadcrumb | undefined = this.getBreadcrumb(
        breadcrumb.parents[0].link
      );
      if (b) this.breadcrumb!.parents!.push(b);
    }

    return breadcrumb;
  }

  getUser(): UserModel {
    const user: any = localStorage.getItem(keys.USER);
    return user ? JSON.parse(user) : undefined;
  }
}
