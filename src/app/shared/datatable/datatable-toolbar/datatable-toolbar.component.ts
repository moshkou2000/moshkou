import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { SidenavService } from '../../sidenav/sidenav.service';
import { CdkBottomSheetComponent } from '../../bottom-sheet/cdk-bottom-sheet.component';
import { DatatableToolbarModel } from './datatable-toolbar.model';
import { CONSTANT_STRINIGS } from '../../../core/constants/constant_strings';

@Component({
  selector: 'app-datatable-toolbar',
  templateUrl: './datatable-toolbar.component.html',
  styleUrls: ['./datatable-toolbar.component.scss'],
})
export class DatatableToolbarComponent implements OnInit {
  @Input() toolbar: DatatableToolbarModel | undefined;
  @Output() onButtonClick = new EventEmitter();
  @Output() onSearchKeyup = new EventEmitter();

  constructor(
    readonly bottomSheet: MatBottomSheet,
    private generalService: GeneralService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit(): void {
    if (this.toolbar?.hasFullscreen && this.toolbar?.isFullscreen)
      this.toggleFullscreen();
  }

  toggleFullscreen(): void {
    this.toolbar?.toggleFullscreen();
    this.generalService.toggleFullscreen(CONSTANT_STRINIGS.datatable_id);
    this.sidenavService.set(false);
  }

  openBottomSheet(): void {
    this.generalService.openBottomSheet(
      this.bottomSheet,
      this.toolbar?.toolbarButtons,
      (event?: string) => this.onButtonClick.emit(event)
    );
  }

  onKeyup(event: any): void {
    this.onSearchKeyup.emit(event.target.value);
  }

  onClick(event: string): void {
    this.onButtonClick.emit(event);
  }
}
