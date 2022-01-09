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
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.scss'],
})
export class MainnavComponent implements OnChanges {
  @Input() currentRoute: string | undefined;

  items?: NavItemModel[] = Util.getMainnavItems();

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    Util.initNavSelection(this.items, this.currentRoute);
    this.changeDetector.detectChanges();
  }
}
