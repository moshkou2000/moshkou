import { DatatableToolbarArguments } from 'src/app/core/arguments/arguments';
import {
  IToolbarButton,
  IToolbarButtonsName,
} from './datatable-toolbar.interface';

export class DatatableToolbarModel {
  hasSearch: boolean = false;
  hasFullscreen: boolean = false;
  isFullscreen: boolean = false;
  toolbarButtons: IToolbarButton[] | undefined;
  toolbarButtonsName: IToolbarButtonsName | undefined; //  = TOOLBAR_BUTTONS_NAME;

  constructor(args?: DatatableToolbarArguments) {
    if (args?.hasSearch !== undefined && args.hasSearch !== null)
      this.hasSearch = args.hasSearch;
    if (args?.hasFullscreen !== undefined && args.hasFullscreen !== null)
      this.hasFullscreen = args.hasFullscreen;
    if (args?.isFullscreen !== undefined && args.isFullscreen !== null)
      this.isFullscreen = args.isFullscreen;
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
