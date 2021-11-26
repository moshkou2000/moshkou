import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-info',
  templateUrl: './sidenav-info.component.html',
  styleUrls: ['./sidenav-info.component.scss'],
})
export class SidenavInfoComponent implements OnInit {
  routerEventsSubscription: Subscription | undefined;

  constructor(private router: Router) {
    this.routerEventsSubscription = this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
        }
      }
    );
  }

  ngOnInit(): void {}
}
