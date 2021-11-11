import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/interfaces/isidenav copy';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoutSubscription: Subscription | undefined;
  routerEventsSubscription: Subscription | undefined;
  breadcrumbs?: IBreadcrumb;
  showSidebar = true;
  constructor(
    private router: Router,
    private location: Location,
    private generalService: GeneralService
  ) {
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = this.generalService.getBreadcrumbs(
          this.toLink(this.location.path())
        );
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.logoutSubscription) {
      this.logoutSubscription.unsubscribe();
    }
  }

  toLink(location: string) {
    if (location.length > 0 && location[0] === '/') {
      location = location.substring(1);
    }
    return location;
  }

  toggle() {}
  exit() {}
}
