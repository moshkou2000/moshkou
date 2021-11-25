import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { SidenavService } from '../../sidenav/sidenav.service';
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
    private generalService: GeneralService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit(): void {}

  // fullscreen target id <toggleFullscreen>
  // close sidenav <set>
  // toggle text & icon of fullscreen button <isFullscreen> 'datatable_id'
  toggleFullscreen(id: string): void {
    this.isFullscreen = !this.isFullscreen;
    this.generalService.toggleFullscreen(id);
    this.sidenavService.set(false);
  }

  onKeyup(event: any) {
    this.onSearchKeyup.emit(event.target.value);
  }

  onClick(event: string) {
    this.onButtonClick.emit(event);
  }
}
