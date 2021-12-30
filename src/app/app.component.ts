import { OnInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LayoutModel } from './core/models/layout.model';
import { NavItemModel } from './core/models/navitem.model';
import { Util } from './core/utils/util';
import { SidenavInfoService } from './shared/sidenav-info/sidenav-info.service';
import { SidenavService } from './shared/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatDrawer) sidenav: MatDrawer | undefined;
  routerEventsSubscription: Subscription | undefined;
  sidenavSubscription: Subscription | undefined;
  sidenavInfoSubscription: Subscription | undefined;
  isSidenavOpen: boolean = false;
  isSidenavInfoOpen: boolean = false;

  layout: LayoutModel = new LayoutModel();
  sidenavItems?: NavItemModel[] = Util.sidenavItems;
  currentRoute: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sidenavService: SidenavService,
    private sidenavInfoService: SidenavInfoService
  ) {
    // router
    this.routerEventsSubscription = this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = event.url.substring(1) ?? '';

          this.layout.hasHeader =
            this.activatedRoute.firstChild?.snapshot.data.hasHeader === true;
          this.layout.hasFooter =
            this.activatedRoute.firstChild?.snapshot.data.hasFooter === true;
          this.layout.hasMainnav =
            this.activatedRoute.firstChild?.snapshot.data.hasMainnav === true;

          if (this.layout.hasMainnav) this.isSidenavOpen = false;
        }
      }
    );

    // sidenav
    this.sidenavSubscription = this.sidenavService
      .get()
      .subscribe((flag?: boolean) => {
        this.isSidenavOpen = flag ?? !this.isSidenavOpen;
        if (this.isSidenavOpen) this.sidenav?.open();
        else this.sidenav?.close();
      });

    // sidenav-info
    // this.sidenavInfoSubscription = this.sidenavInfoService
    //   .get()
    //   .subscribe((flag?: boolean) => {
    //     this.isSidenavInfoOpen = flag ?? !this.isSidenavInfoOpen;
    //     if (this.isSidenavInfoOpen) this.sidenavInfo?.open();
    //     else this.sidenavInfo?.close();
    //   });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
    if (this.sidenavSubscription) {
      this.sidenavSubscription.unsubscribe();
    }
  }
}
