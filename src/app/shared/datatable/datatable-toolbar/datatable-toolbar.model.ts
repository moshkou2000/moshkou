import { DatatableToolbarArguments } from 'src/app/core/arguments/arguments';
import { TOOLBAR_BUTTONS_NAME } from 'src/app/core/constants/toolbar-buttons';
import {
  IToolbarButton,
  IToolbarButtonsName,
} from './datatable-toolbar.interface';

export class DatatableToolbarModel {
  hasSearch: boolean = false;
  hasFullscreen: boolean = false;
  isFullscreen: boolean = false;
  toolbarButton: IToolbarButton | undefined;
  toolbarButtons: IToolbarButton[] | undefined;
  toolbarButtonsName: IToolbarButtonsName | undefined; //  = TOOLBAR_BUTTONS_NAME;

  get isAdd(): boolean {
    return this.toolbarButton?.name === TOOLBAR_BUTTONS_NAME.ADD;
  }
  get isFilter(): boolean {
    return this.toolbarButton?.name === TOOLBAR_BUTTONS_NAME.FILTER;
  }
  get isEdit(): boolean {
    return this.toolbarButton?.name === TOOLBAR_BUTTONS_NAME.EDIT;
  }
  get isDelete(): boolean {
    return this.toolbarButton?.name === TOOLBAR_BUTTONS_NAME.DELETE;
  }
  get isReports(): boolean {
    return this.toolbarButton?.name === TOOLBAR_BUTTONS_NAME.REPORTS;
  }
  get isExcel(): boolean {
    return this.toolbarButton?.name === TOOLBAR_BUTTONS_NAME.EXCEL;
  }
  get isPdf(): boolean {
    return this.toolbarButton?.name === TOOLBAR_BUTTONS_NAME.PDF;
  }
  get isDownload(): boolean {
    return this.toolbarButton?.name === TOOLBAR_BUTTONS_NAME.DOWNLOAD;
  }
  get isUpload(): boolean {
    return this.toolbarButton?.name === TOOLBAR_BUTTONS_NAME.UPDATE;
  }

  constructor(args?: DatatableToolbarArguments) {
    if (args?.hasSearch !== undefined && args.hasSearch !== null)
      this.hasSearch = args.hasSearch;
    if (args?.hasFullscreen !== undefined && args.hasFullscreen !== null)
      this.hasFullscreen = args.hasFullscreen;
    if (args?.isFullscreen !== undefined && args.isFullscreen !== null)
      this.isFullscreen = args.isFullscreen;
    if (args?.toolbarButton !== undefined && args.toolbarButton !== null)
      this.toolbarButton = args.toolbarButton;
    if (args?.toolbarButtons !== undefined && args.toolbarButtons !== null)
      this.toolbarButtons = args.toolbarButtons;
    if (
      args?.toolbarButtonsName !== undefined &&
      args.toolbarButtonsName !== null
    )
      this.toolbarButtonsName = args.toolbarButtonsName;
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
  }

  getButton(name: string): IToolbarButton | undefined {
    return this.toolbarButtons?.find((b) => b.name === name);
  }

  updateButton(button: IToolbarButton): void {
    const b: IToolbarButton | undefined = this.getButton(button.name);
    if (b !== undefined && b !== null) {
      b.badge = button.badge;
      b.badgeColor = button.badgeColor;
      b.icon = button.icon;
      b.imageIcon = button.imageIcon;
    }
  }
}
