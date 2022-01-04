import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SidenavService } from '../../sidenav/sidenav.service';
import { DatatableToolbarModel } from './datatable-toolbar.model';
import { CONSTANT_STRINIG } from 'src/app/core/constants/constant_string';
import { Util } from 'src/app/core/utils/util';

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
    private sidenavService: SidenavService
  ) {}

  ngOnInit(): void {
    if (this.toolbar?.hasFullscreen && this.toolbar?.isFullscreen)
      this.toggleFullscreen();
  }

  toggleFullscreen(): void {
    this.toolbar?.toggleFullscreen();
    Util.toggleFullscreen(CONSTANT_STRINIG.datatableId);
    this.sidenavService.set(false);
  }

  openBottomSheet(): void {
    Util.openBottomSheet(
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
