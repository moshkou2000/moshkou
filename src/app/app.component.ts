import { AfterViewInit, OnInit, Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISidenav } from './core/interfaces/isidenav';
import { LayoutModel } from './core/models/layout.model';
import { GeneralService } from './core/services/general/general.service';
import { AlertModel } from './shared/components/alert/alert.model';
import { AlertService } from './shared/components/alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  routerEventsSubscription: Subscription | undefined;
  layout: LayoutModel = new LayoutModel();
  sidenavItems?: ISidenav[];
  alert: AlertModel = new AlertModel(
    '678687687687687687',
    1,
    'This is a message...',
    [{ text: 'NNNN', data: 123456789 }]
  );

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private generalService: GeneralService,
    private alertService: AlertService
  ) {
    this.routerEventsSubscription = this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.layout.hasAlert =
            this.activatedRoute.firstChild?.snapshot.data.hasAlert === true;
          this.layout.hasHeader =
            this.activatedRoute.firstChild?.snapshot.data.hasHeader === true;
          this.layout.hasFooter =
            this.activatedRoute.firstChild?.snapshot.data.hasFooter === true;
        }
      }
    );
  }
  ngOnInit(): void {
    this.sidenavItems = this.generalService.sidenavItems;
    this.alertService.set(this.alert);
  }

  ngAfterViewInit() {
    this.initMaterializeComponents();
  }

  initMaterializeComponents() {}
}
