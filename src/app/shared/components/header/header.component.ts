import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/interfaces/ibreadcrumb';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { Subscription } from 'rxjs';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  routerEventsSubscription: Subscription | undefined;
  logoutSubscription: Subscription | undefined;
  breadcrumbs?: IBreadcrumb;
  hasSidenav: boolean = true;
  isSidenavOpen: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private generalService: GeneralService,
    private sidenavService: SidenavService
  ) {
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = this.generalService.getBreadcrumbs(
          this.toLink(this.location.path())
        );
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
    if (this.logoutSubscription) {
      this.logoutSubscription.unsubscribe();
    }
  }

  toLink(location: string): string {
    if (location.length > 0 && location[0] === '/') {
      location = location.substring(1);
    }
    return location;
  }

  toggle(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.sidenavService.set(this.isSidenavOpen);
  }
  exit(): void {}
}
