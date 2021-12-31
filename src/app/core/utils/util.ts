import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CdkBottomSheetComponent } from 'src/app/shared/bottom-sheet/cdk-bottom-sheet.component';
import { IToolbarButton } from 'src/app/shared/datatable/datatable-toolbar/datatable-toolbar.interface';
import { INITIIAL_ROUTE } from '../constants/app-routes';
import { BREADCRUMBS } from '../constants/breadcrumbs';
import { KEY } from '../constants/key';
import { MAINNAV_ITEMS } from '../constants/mainnav_items';
import { SIDENAV_ITEMS } from '../constants/sidenav_items';
import { IBreadcrumb } from '../interfaces/ibreadcrumb';
import { NavItemModel } from '../models/navitem.model';
import { UserModel } from '../models/user.model';

/*
  Util
  is a class with static members
*/

export class Util {
  /*
    get const | static
  */

  // Breadcrumbs
  // link: current route
  private static breadcrumb: IBreadcrumb | undefined;
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

  // Sidenav
  static get sidenavItems(): NavItemModel[] {
    return SIDENAV_ITEMS;
  }

  // Mainnav
  static get mainnavItems(): NavItemModel[] {
    return MAINNAV_ITEMS;
  }

  // User
  static get user(): UserModel {
    const user: string | null = localStorage.getItem(KEY.user);
    return user ? JSON.parse(user) : undefined;
  }

  /*
    actions
  */

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

  // init navigation selection based on current route
  static initNavSelection(items?: NavItemModel[], route?: String): void {
    let isFound: boolean = false;
    const r: String =
      route && route.length > 0 ? route : INITIIAL_ROUTE.substring(1);
    if (items) {
      this.clearNavSelection(items);
      for (let a of items) {
        if (isFound) break;
        if (a?.link === r) {
          a.selected = true;
          isFound = true;
          break;
        } else if (a?.children) {
          for (let b of a?.children) {
            if (b?.link === r) {
              b.selected = true;
              isFound = true;
              break;
            }
          }
        }
      }
    }
  }

  // cleare navigation selection
  static clearNavSelection(items?: NavItemModel[]): void {
    items?.forEach((a) => {
      a.selected = false;
      if (a.children) {
        a.children?.forEach((b) => (b.selected = false));
      }
    });
  }

  /*
    convertors
  */

  static toLink(location: string): string {
    if (location.length > 0 && location[0] === '/') {
      location = location.substring(1);
    }
    return location;
  }
}
