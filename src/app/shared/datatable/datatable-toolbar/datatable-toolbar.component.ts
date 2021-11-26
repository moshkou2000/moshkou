import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { SidenavService } from '../../sidenav/sidenav.service';
import { CdkBottomSheetComponent } from './cdk-bottom-sheet.component';
import { IToolbarButton } from './datatable-toolbar.interface';
import { TOOLBAR_BUTTONS } from './datatable-toolbar.model';

@Component({
  selector: 'app-datatable-toolbar',
  templateUrl: './datatable-toolbar.component.html',
  styleUrls: ['./datatable-toolbar.component.scss'],
})
export class DatatableToolbarComponent implements OnInit {
  @Input() updateBadge: any;
  @Output() onButtonClick = new EventEmitter();
  @Output() onSearchKeyup = new EventEmitter();

  isFullscreen: boolean = false;
  toolbarButtons: IToolbarButton[] = TOOLBAR_BUTTONS;

  constructor(
    readonly bottomSheet: MatBottomSheet,
    private generalService: GeneralService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit(): void {}

  openBottomSheet(): void {
    this.bottomSheet.open(CdkBottomSheetComponent, {
      data: (event?: string) => this.onButtonClick.emit(event),
    });
  }

  // fullscreen target id <toggleFullscreen>
  // close sidenav <set>
  // toggle text & icon of fullscreen button <isFullscreen> 'datatable_id'
  toggleFullscreen(id: string): void {
    this.isFullscreen = !this.isFullscreen;
    this.generalService.toggleFullscreen(id);
    this.sidenavService.set(false);
  }

  onKeyup(event: any): void {
    this.onSearchKeyup.emit(event.target.value);
  }

  onClick(event: string): void {
    this.onButtonClick.emit(event);
  }
}
