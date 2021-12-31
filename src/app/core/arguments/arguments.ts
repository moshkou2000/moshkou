import {
  IToolbarButton,
  IToolbarButtonsName,
} from 'src/app/shared/datatable/datatable-toolbar/datatable-toolbar.interface';
import { Options } from 'src/app/shared/notification/notification.model';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';

export type GetArguments = {
  tag?: string;
  sort?: string;
  order?: string;
  filter?: string;
  page?: number;
  size?: number;
};

export type AnnouncementArguments = {
  id: string;
  message: string;
  url: string;
};

export type DatatableToolbarArguments = {
  hasSearch?: boolean;
  hasFullscreen?: boolean;
  isFullscreen?: boolean;
  toolbarButtons?: IToolbarButton[];
  toolbarButtonsName?: IToolbarButtonsName;
};

export type NotificationArguments = {
  id: string;
  message: string;
  level?: string;
  options?: [Options];
};

export type OptionsArguments = {
  text: string;
  data?: any;
  notificationId?: string;
};

export type ViewStatesArguments = {
  state?: ViewStates;
  title?: string;
  message?: string;
  icon?: string;
  iconColor?: string;
  imageIcon?: string;
  backgroundColor?: string;
  backgroundImage?: string;
};

export type NavigationArguments = {
  navigationEnd?: Function;
  navigationError?: Function;
};
