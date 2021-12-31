import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { IBreadcrumb } from 'src/app/core/interfaces/ibreadcrumb';
import { SidenavService } from '../sidenav/sidenav.service';
import { Util } from 'src/app/core/utils/util';
import { IServices } from 'src/app/core/services/services.service';

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
    private sidenavService: SidenavService,
    private service: IServices
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.breadcrumbs = Util.getBreadcrumbs(this.currentRoute);
    this.changeDetector.detectChanges();
  }

  ngOnDestroy(): void {}

  toggleSidenav(): void {
    this.sidenavService.set();
  }

  exit(): void {
    Util.clear();
    this.service.navigate(['/login']);
  }
}
