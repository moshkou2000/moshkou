import { OnInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LayoutModel } from './core/models/layout.model';
import { NavItemModel } from './core/models/navitem.model';
import { ScreenModel } from './core/models/screen.model';
import { IServices } from './core/services/services.service';
import { Util } from './core/utils/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatDrawer) sidenav: MatDrawer | undefined;

  screenObservable: Observable<Event> | undefined;
  screenSubscription: Subscription | undefined;
  sidenavSubscription: Subscription | undefined;
  sidenavInfoSubscription: Subscription | undefined;

  isSidenavOpen: boolean = false;

  layout: LayoutModel = new LayoutModel();
  sidenavItems?: NavItemModel[] = Util.getSidenavItems();
  currentRoute: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: IServices
  ) {
    // window resize
    this.screenObservable = fromEvent(window, 'resize');
    this.screenSubscription = this.screenObservable
      .pipe(debounceTime(1000))
      .subscribe(() => this.service.setScreen(new ScreenModel()));

    // navigation
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
    this.sidenavSubscription = this.service
      .getSidenav()
      .subscribe((flag?: boolean) => {
        this.isSidenavOpen = flag ?? !this.isSidenavOpen;
        if (this.isSidenavOpen) this.sidenav?.open();
        else this.sidenav?.close();
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.screenSubscription?.unsubscribe();
    this.sidenavSubscription?.unsubscribe();
    this.sidenavInfoSubscription?.unsubscribe();
  }
}
