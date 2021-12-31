import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-info',
  templateUrl: './sidenav-info.component.html',
  styleUrls: ['./sidenav-info.component.scss'],
})
export class SidenavInfoComponent implements OnInit {
  routerEventsSubscription: Subscription | undefined;

  constructor() {}

  ngOnInit(): void {}
}
