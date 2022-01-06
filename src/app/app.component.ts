import { OnInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LayoutModel } from './core/models/layout.model';
import { NavItemModel } from './core/models/navitem.model';
import { IServices } from './core/services/services.service';
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

  sidenavSubscription: Subscription | undefined;
  sidenavInfoSubscription: Subscription | undefined;
  isSidenavOpen: boolean = false;
  isSidenavInfoOpen: boolean = false;

  layout: LayoutModel = new LayoutModel();
  sidenavItems?: NavItemModel[] = Util.sidenavItems;
  currentRoute: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private sidenavService: SidenavService,
    private sidenavInfoService: SidenavInfoService,
    private service: IServices
  ) {
    this.service.navigation({
      navigationEnd: (event: any) => {
        this.currentRoute = event.url.substring(1) ?? '';

        this.layout.hasMainnav =
          this.activatedRoute.firstChild?.snapshot.data.hasMainnav === true;
        this.layout.hasSidenav =
          this.activatedRoute.firstChild?.snapshot.data.hasSidenav === true;
        this.layout.hasHeader =
          this.activatedRoute.firstChild?.snapshot.data.hasHeader === true;
        this.layout.hasFooter =
          this.activatedRoute.firstChild?.snapshot.data.hasFooter === true;

        if (!this.layout.hasSidenav) this.isSidenavOpen = false;
      },
    });

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
    this.sidenavSubscription?.unsubscribe();
  }
}
