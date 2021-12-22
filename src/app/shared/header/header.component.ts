import { Component, Input, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/interfaces/ibreadcrumb';
import { Subscription } from 'rxjs';
import { SidenavService } from '../sidenav/sidenav.service';
import { Util } from 'src/app/core/utils/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  @Input() hasSidenav: boolean | undefined;

  routerEventsSubscription: Subscription | undefined;
  logoutSubscription: Subscription | undefined;
  breadcrumbs?: IBreadcrumb;

  constructor(private router: Router, private sidenavService: SidenavService) {
    this.breadcrumbs = Util.getBreadcrumbs(this.toLink(this.router.url));

    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = Util.getBreadcrumbs(this.toLink(this.router.url));
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

  toggleSidenav(): void {
    this.sidenavService.set();
  }
  exit(): void {}
}
