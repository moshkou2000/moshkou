import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogRef } from '@angular/material/dialog';
import { BottomSheetComponent } from 'src/app/shared/bottom-sheet/bottom-sheet.component';
import { IToolbarButton } from 'src/app/shared/datatable/datatable-toolbar/datatable-toolbar.interface';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';
import { ViewStatesModel } from 'src/app/shared/view-states/view-states.model';
import {
  DialogArguments,
  SnackbarArguments,
  UserArguments,
} from '../arguments/arguments';
import { INITIIAL_ROUTE } from '../constants/app-routes';
import { BREADCRUMBS } from '../constants/breadcrumbs';
import { CONSTANT_NUMBER } from '../constants/constant_number';
import { CONSTANT_REGEXP } from '../constants/constant_regexp';
import { KEY } from '../constants/key';
import { MAINNAV_ITEMS } from '../constants/mainnav_items';
import { SIDENAV_ITEMS } from '../constants/sidenav_items';
import { IBreadcrumb } from '../interfaces/ibreadcrumb';
import { NavItemModel } from '../models/navitem.model';
import { UserModel } from '../models/user.model';
import { IServices } from '../services/services.service';

/*
  Util
  is a class with static members
*/

export class Util {
  /*
    get const | static | storage
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
  static getSidenavItems(): NavItemModel[] {
    return SIDENAV_ITEMS;
  }

  // Mainnav
  static getMainnavItems(): NavItemModel[] {
    return MAINNAV_ITEMS;
  }

  // User
  private static user: UserModel | undefined;
  static getUser(): UserModel | undefined {
    if (this.user) return this.user;
    try {
      const user: string | undefined | null = localStorage.getItem(KEY.user);
      if (user) {
        const u: any = JSON.parse(user);
        return new UserModel(u);
      }
    } catch {}
    return;
  }

  static setUser(value: UserModel | undefined): void {
    if (value) {
      this.user = value;
      localStorage.setItem(KEY.user, JSON.stringify(value));
    }
  }

  static updateUser(args: UserArguments): void {
    if (args) {
      if (!this.user) this.user = new UserModel();

      if (args.token) this.user.token = args.token;
      if (args.tempToken) this.user.tempToken = args.tempToken;
      if (args.email) this.user.email = args.email;
      if (args.name) this.user.name = args.name;
      if (args.phone) this.user.phone = args.phone;
      if (args.gender) this.user.gender = args.gender;
      if (args.dob) this.user.dob = args.dob;
      if (args.picture) this.user.picture = args.picture;
      if (args.country) this.user.country = args.country;
      if (args.about_me) this.user.about_me = args.about_me;
      if (args.createdAt) this.user.createdAt = args.createdAt;
      if (args.updatedAt) this.user.updatedAt = args.updatedAt;

      localStorage.setItem(KEY.user, JSON.stringify(this.user));
    }
  }

  // ViewStates
  static getViewStates(): ViewStatesModel {
    try {
      const item: string | undefined | null = localStorage.getItem(
        KEY.viewStates
      );
      if (item) {
        const b: any = JSON.parse(item);
        if (b.v > new Date().getTime()) {
          return new ViewStatesModel({
            state: ViewStates[b.k as keyof typeof ViewStates],
          });
        }
      }
    } catch {}
    return new ViewStatesModel({ state: ViewStates.none });
  }

  static setViewStates(value: ViewStates): void {
    localStorage.setItem(
      KEY.viewStates,
      JSON.stringify({
        k: ViewStates[value],
        v: new Date().getTime() + CONSTANT_NUMBER.viewStatesExpiration,
      })
    );
  }

  /*
    actions
  */

  // clear localStorage
  // you can clear cach, session & ...
  static clear(): void {
    localStorage.clear();
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

  // open snackbar
  static openSnackbar(args: SnackbarArguments) {
    args.snackbar.openFromComponent(SnackbarComponent, {
      data: args.data,
      duration: args.duration ?? 3000,
      horizontalPosition: args.horizontalPosition ?? 'center',
      verticalPosition: args.verticalPosition ?? 'top',
    });
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
    bottomSheet.open(BottomSheetComponent, {
      data: {
        buttons: buttons,
        buttonClick: buttonClick,
      },
    });
  }

  // open Dialog
  // dialog: from view
  // service: to update the dialog position on window size change
  private static minDialogWidth: number = 250;
  private static minDialogHeight: number = 200;
  public static dialogMargin: number = 56;
  private static getDialogPosition(position: number[], minWidth: number) {
    if (position) {
      const wWidth: number = window.innerWidth;
      const wHeight: number = window.innerHeight;
      let top: number = position[1];
      let left: number = position[0];

      if (left + minWidth > wWidth) {
        left = wWidth - minWidth - Util.dialogMargin;
      }
      if (top + Util.minDialogHeight > wHeight) {
        top = wHeight - Util.minDialogHeight - Util.dialogMargin;
      }

      if (left < wWidth / 2) {
        return {
          left: `${position[0]}px`,
          top: `${top}px`,
        };
      }

      const right: number = wWidth - minWidth - left;
      return {
        right: `${right}px`,
        top: `${top}px`,
      };
    }
    return;
  }
  static openDialog(
    args: DialogArguments,
    service?: IServices
  ): MatDialogRef<any, any> {
    const originalPosition: any | undefined = args.position;
    const minDialogWidth: number = args.width ?? Util.minDialogWidth;
    let dialogWidth: string | undefined;
    let dialogPosition: any | undefined;
    const screen = service?.getScreenSize();
    screen?.setScreenMode();

    // set dialogWidth & dialogPosition
    if (screen?.isSmall || screen?.isMobile || screen?.isTablet) {
      dialogWidth = undefined;
      dialogPosition = {
        bottom: `${Util.dialogMargin}px`,
      };
    } else {
      dialogWidth = `${minDialogWidth}px`;
      dialogPosition = Util.getDialogPosition(originalPosition, minDialogWidth);
    }

    // dialog
    const dialogRef: MatDialogRef<any, any> = args.dialog.open(args.component, {
      disableClose: args.disableClose ?? true,
      data: args.data,
      width: dialogWidth,
      position: dialogPosition,
    });
    dialogRef.afterClosed().subscribe(() => {
      if (args.onClosed) args.onClosed();
    });

    // on screen change
    service?.getScreen().subscribe((screen) => {
      if (screen?.isSmall || screen?.isMobile || screen?.isTablet) {
        dialogWidth = undefined;
        dialogPosition = {
          bottom: `${Util.dialogMargin}px`,
        };
      } else {
        dialogWidth = `${minDialogWidth}px`;
        dialogPosition = Util.getDialogPosition(
          originalPosition,
          minDialogWidth
        );
      }
      dialogRef?.updateSize(dialogWidth);
      dialogRef?.updatePosition(dialogPosition);
    });

    return dialogRef;
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
    properties
  */

  static getPosition(
    element: HTMLElement | undefined | null
  ): number[] | undefined {
    if (element) {
      var top = element.getBoundingClientRect().top + window.scrollY;
      var left = element.getBoundingClientRect().left + window.scrollX;
      return [top, left];
    }
    return;
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

  /*
    validation
  */
  static isSessionExpired(): boolean {
    // TODO: get jwt token expiration
    return Util.getUser()?.token === undefined;
  }

  static isEmail(email?: string): boolean {
    return email ? CONSTANT_REGEXP.email.test(email) : false;
  }

  static isPhone(phone?: string): boolean {
    return phone ? CONSTANT_REGEXP.phone.test(phone) : false;
  }

  static isFullName(fullName?: string): boolean {
    return fullName ? CONSTANT_REGEXP.fullName.test(fullName) : false;
  }
}
