import {
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { NavItemModel } from 'src/app/core/models/navitem.model';
import { Util } from 'src/app/core/utils/util';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() currentRoute: string | undefined;

  items?: NavItemModel[] = Util.sidenavItems;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    Util.initSelection(this.items, this.currentRoute);
    this.changeDetector.detectChanges();
  }

  itemSelect(item: NavItemModel): void {
    console.log(88, item);

    if (item) {
      if (item?.link) {
        this.toggleSelectedItem(item);
      }
    }
  }

  toggleSelectedItem(item: NavItemModel): void {
    Util.clearSelection(this.items);
    item.selected = true;
  }
}
