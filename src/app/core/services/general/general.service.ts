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
  },
  {
    label: 'Settings',
    link: 'settings',
    icon: 'backup',
  },
  {
    label: 'Tips',
    link: 'tips',
    icon: 'backup',
  },
  {
    class: 'divider',
  },
  {
    label: 'Login',
    link: 'login',
    icon: 'backup',
  },
];

// breadcrumbs must follow routes
// just set the direct parent into "parents"
const breadcrumbs: IBreadcrumb[] = [
  { link: 'home', label: 'Home' },
  { link: 'settings', label: 'Settings' },
  { link: 'tips', label: 'Tips' },
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
  breadcrumb: any = null;
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
  getBreadcrumb(link: string) {
    let breadcrumb = breadcrumbs.find((item) => {
      return item.link === link;
    });

    if (breadcrumb?.parents) {
      this.breadcrumb.parents.push(
        this.getBreadcrumb(breadcrumb.parents[0].link)
      );
    }

    return breadcrumb;
  }

  getUser(): UserModel {
    const _user: any = localStorage.getItem(keys.USER);
    return _user ? JSON.parse(_user) : undefined;
  }
}
