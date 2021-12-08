import { Injectable } from '@angular/core';
import { keys } from 'src/environments/environment';
import { ISidenav } from '../../interfaces/isidenav';
import { IBreadcrumb } from '../../interfaces/ibreadcrumb';
import { UserModel } from '../../models/users.model';
import { SIDENAV_ITEMS } from '../../constants/sidenav_items';
import { BREADCRUMBS } from '../../constants/breadcrumbs';
import { CdkBottomSheetComponent } from 'src/app/shared/bottom-sheet/cdk-bottom-sheet.component';
import { IToolbarButton } from 'src/app/shared/datatable/datatable-toolbar/datatable-toolbar.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  breadcrumb: IBreadcrumb | undefined;
  constructor() {}

  // Sidenav
  get sidenavItems(): ISidenav[] {
    return SIDENAV_ITEMS;
  }

  // Breadcrumbs
  // link: current route
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

  // User
  getUser(): UserModel {
    const user: string | null = localStorage.getItem(keys.USER);
    return user ? JSON.parse(user) : undefined;
  }

  // Fullscreen
  // id: target selector
  toggleFullscreen(id: string): void {
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
  openBottomSheet(
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
}
