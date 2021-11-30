import { ViewStates } from './view-states.enum';

type ViewStatesArguments = {
  state?: ViewStates;
  title?: string;
  message?: string;
  icon?: string;
  iconColor?: string;
  imageIcon?: string;
  backgroundColor?: string;
  backgroundImage?: string;
};

export class ViewStatesModel {
  state?: ViewStates = ViewStates.idle;
  title?: string;
  message?: string;
  icon?: string;
  iconColor: string = '';
  imageIcon?: string;
  backgroundColor?: string;
  backgroundImage?: string;

  get isBusy(): boolean {
    return this.state === ViewStates.busy;
  }
  get isEmpty(): boolean {
    return this.state === ViewStates.empty;
  }
  get isError(): boolean {
    return this.state === ViewStates.error;
  }
  get isIdle(): boolean {
    return this.state === ViewStates.idle;
  }
  get isOffline(): boolean {
    return this.state === ViewStates.offline;
  }
  get isNoAccess(): boolean {
    return this.state === ViewStates.noAccess;
  }
  get isNoEvent(): boolean {
    return this.state === ViewStates.noEvent;
  }
  get isNoTask(): boolean {
    return this.state === ViewStates.noTask;
  }
  get isNotAvailable(): boolean {
    return this.state === ViewStates.notAvailable;
  }

  constructor(args?: ViewStatesArguments) {
    if (args?.state !== undefined && args.state !== null)
      this.state = args.state;
    if (args?.title !== undefined && args.title !== null)
      this.title = args.title;
    if (args?.message !== undefined && args.message !== null)
      this.message = args.message;
    if (args?.iconColor !== undefined && args.iconColor !== null)
      this.iconColor = args.iconColor;

    const noIcon: boolean =
      args?.icon === undefined ||
      args.icon === null ||
      args.icon?.trim().length === 0;
    const noImageIcon: boolean =
      args?.imageIcon === undefined ||
      args.imageIcon === null ||
      args.imageIcon?.trim().length === 0;
    if (noIcon && noImageIcon) {
      if (this.isError) {
        this.icon = 'error';
        this.iconColor = 'error-color';
      } else if (this.isEmpty) {
        this.imageIcon = '../../../assets/icons/empty-state.svg';
      } else if (this.isOffline) {
        this.imageIcon = '../../../assets/icons/offline-state.svg';
      } else if (this.isNoAccess) {
        this.imageIcon = '../../../assets/icons/no-access-state.svg';
      } else if (this.isNoEvent) {
        this.imageIcon = '../../../assets/icons/no-event-state.svg';
      } else if (this.isNoTask) {
        this.imageIcon = '../../../assets/icons/no-task-state.svg';
      } else if (this.isNotAvailable) {
        this.imageIcon = '../../../assets/icons/not-available-state.svg';
      }
    }
  }
}
