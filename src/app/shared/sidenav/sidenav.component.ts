import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { INITIIAL_ROUTE } from 'src/app/core/constants/app-routes';
import { ISidenav, SidenavArguments } from 'src/app/core/interfaces/isidenav';
import { GeneralService } from 'src/app/core/services/general/general.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  routerEventsSubscription: Subscription | undefined;
  sidenavItems?: ISidenav[];

  constructor(private generalService: GeneralService, private router: Router) {
    this.routerEventsSubscription = this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.initSelection(event.url.substring(1));
        }
      }
    );
  }

  ngOnInit(): void {
    this.sidenavItems = this.generalService.sidenavItems;
  }

  initSelection(route: String): void {
    let isFound: boolean = false;
    const r: String = route.length > 0 ? route : INITIIAL_ROUTE.substring(1);
    if (this.sidenavItems) {
      this.clearSelection();
      for (let a of this.sidenavItems) {
        if (isFound) break;
        if (a?.link === r) {
          a.selected = true;
          isFound = true;
          break;
        } else if (a?.children) {
          for (let b of a?.children) {
            if (b?.link === r) {
              b.selected = true;
              isFound = true;
              break;
            }
          }
        }
      }
    }
  }

  itemSelect(args: SidenavArguments): void {
    if (args.items) {
      if (args.items?.link) {
        this.toggleSelectedItem(args.items);
      }
    } else if (args.item) {
      if (args.item?.link) {
        this.toggleSelectedItem(args.item);
      }
    }
  }

  toggleSelectedItem(item: ISidenav): void {
    this.clearSelection();
    item.selected = true;
  }

  clearSelection(): void {
    this.sidenavItems?.forEach((a) => {
      a.selected = false;
      if (a.children) {
        a.children?.forEach((b) => (b.selected = false));
      }
    });
  }
}
