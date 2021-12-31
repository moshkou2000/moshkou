import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NavItemModel } from 'src/app/core/models/navitem.model';
import { Util } from 'src/app/core/utils/util';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnChanges {
  @Input() currentRoute: string | undefined;

  items?: NavItemModel[] = Util.sidenavItems;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    Util.initNavSelection(this.items, this.currentRoute);
    this.changeDetector.detectChanges();
  }
}
