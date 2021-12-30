import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { IBreadcrumb } from 'src/app/core/interfaces/ibreadcrumb';
import { Subscription } from 'rxjs';
import { SidenavService } from '../sidenav/sidenav.service';
import { Util } from 'src/app/core/utils/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnChanges {
  @Input() currentRoute: string = '';
  @Input() hasSidenav: boolean | undefined;

  breadcrumbs?: IBreadcrumb;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private sidenavService: SidenavService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.breadcrumbs = Util.getBreadcrumbs(this.currentRoute);
    this.changeDetector.detectChanges();
  }

  ngOnDestroy(): void {}

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
