import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CdkBottomSheetComponent } from 'src/app/shared/bottom-sheet/cdk-bottom-sheet.component';
import { IToolbarButton } from 'src/app/shared/datatable/datatable-toolbar/datatable-toolbar.interface';
import { BREADCRUMBS } from '../constants/breadcrumbs';
import { KEY } from '../constants/key';
import { SIDENAV_ITEMS } from '../constants/sidenav_items';
import { IBreadcrumb } from '../interfaces/ibreadcrumb';
import { ISidenav } from '../interfaces/isidenav';
import { UserModel } from '../models/user.model';

export class Util {
  private static breadcrumb: IBreadcrumb | undefined;

  static toLink(location: string): string {
    if (location.length > 0 && location[0] === '/') {
      location = location.substring(1);
    }
    return location;
  }

  // Sidenav
  static get sidenavItems(): ISidenav[] {
    return SIDENAV_ITEMS;
  }

  // User
  static get user(): UserModel {
    const user: string | null = localStorage.getItem(KEY.user);
    return user ? JSON.parse(user) : undefined;
  }

  // Breadcrumbs
  // link: current route
  static getBreadcrumbs(link: string): IBreadcrumb | undefined {
    let breadcrumb: IBreadcrumb | undefined = BREADCRUMBS.find((item) => {
      return item.link === link;
    });
    this.breadcrumb = breadcrumb;
    if (breadcrumb && breadcrumb.parents) {
      this.getBreadcrumb(breadcrumb.parents[0].link);
    }
    return this.breadcrumb;
  }
  private static getBreadcrumb(link: string): IBreadcrumb | undefined {
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

  // Fullscreen
  // id: target selector
  static toggleFullscreen(id: string): void {
    const target = document.getElementById(id);
    if (target) {
      const main = document.querySelector('body>app-root>main');
      if (main) {
        const isFullscreen: boolean = target.classList.contains('fullscreen');
        if (isFullscreen) {
          main.removeAttribute('style');
          target.className = target.className.replace(' fullscreen', '');
        } else {
          main.setAttribute('style', 'z-index: 9');
          target.className += ' fullscreen';
        }
      }
    }
  }

  // open BottomSheet
  // bottomSheet: from view
  // buttons: list items
  // buttonClick: item click
  static openBottomSheet(
    bottomSheet: MatBottomSheet,
    buttons?: IToolbarButton[],
    buttonClick?: any
  ): void {
    bottomSheet.open(CdkBottomSheetComponent, {
      data: {
        buttons: buttons,
        buttonClick: buttonClick,
      },
    });
  }

  // clear localStorage
  // you can clear cach, session & ...
  static clear(): void {
    localStorage.clear();
  }
}
