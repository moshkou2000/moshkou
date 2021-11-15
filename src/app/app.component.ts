import { AfterViewInit, OnInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISidenav } from './core/interfaces/isidenav';
import { LayoutModel } from './core/models/layout.model';
import { GeneralService } from './core/services/general/general.service';
import { SidenavService } from './shared/components/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(MatDrawer) drawer: MatDrawer | undefined;
  routerEventsSubscription: Subscription | undefined;
  drawerSubscription: Subscription | undefined;
  layout: LayoutModel = new LayoutModel();
  sidenavItems?: ISidenav[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private generalService: GeneralService,
    private sidenavService: SidenavService
  ) {
    this.routerEventsSubscription = this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.layout.hasHeader =
            this.activatedRoute.firstChild?.snapshot.data.hasHeader === true;
          this.layout.hasFooter =
            this.activatedRoute.firstChild?.snapshot.data.hasFooter === true;
        }
      }
    );
    this.drawerSubscription = this.sidenavService
      .get()
      .subscribe((flag: boolean) => {
        if (flag) this.drawer?.open();
        else this.drawer?.close();
      });
  }
  ngOnInit(): void {
    this.sidenavItems = this.generalService.sidenavItems;
  }

  ngAfterViewInit() {
    this.initMaterializeComponents();
  }

  ngOnDestroy() {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
    if (this.drawerSubscription) {
      this.drawerSubscription.unsubscribe();
    }
  }

  initMaterializeComponents() {}
}
