import { Injectable } from '@angular/core';
import { keys } from 'src/environments/environment';
import { ISidenav } from '../../interfaces/isidenav';
import { IBreadcrumb } from '../../interfaces/ibreadcrumb';
import { UserModel } from '../../models/users.model';
import { SIDENAV_ITEMS } from '../../constants/sidenav_items';
import { BREADCRUMBS } from '../../constants/breadcrumbs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  breadcrumb: IBreadcrumb | undefined;
  constructor() {}

  get sidenavItems(): ISidenav[] {
    return SIDENAV_ITEMS;
  }
  getBreadcrumbs(link: string) {
    let breadcrumb: IBreadcrumb | undefined = BREADCRUMBS.find((item) => {
      return item.link === link;
    });

    this.breadcrumb = breadcrumb;

    if (breadcrumb && breadcrumb.parents) {
      this.getBreadcrumb(breadcrumb.parents[0].link);
    }

    return this.breadcrumb;
  }
  getBreadcrumb(link: string): IBreadcrumb | undefined {
    let breadcrumb: IBreadcrumb | undefined = BREADCRUMBS.find((item) => {
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
    const user: string | null = localStorage.getItem(keys.USER);
    return user ? JSON.parse(user) : undefined;
  }
}
