import { ComponentType } from '@angular/cdk/portal';
import { ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
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
  toolbarButton?: IToolbarButton;
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

export type DialogArguments = {
  dialog: MatDialog;
  component: ComponentType<any>;
  disableClose?: boolean;
  width?: number;
  data?: any;
  onClosed?: Function;
  element?: ElementRef;
  position?: number[];
};

export type SnackbarArguments = {
  snackbar: MatSnackBar;
  component?: ComponentType<any>;
  data: any;
  duration?: number;
  horizontalPosition?: MatSnackBarHorizontalPosition | undefined;
  verticalPosition?: MatSnackBarVerticalPosition | undefined;
};

export type TimerArguments = {
  second?: number;
  minute?: number;
  hour?: number;
  day?: number;
  month?: number;
};

export type UserArguments = {
  _id?: string | undefined;
  token?: string | undefined;
  tempToken?: string | undefined;
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
  gender?: string | undefined;
  dob?: string | undefined;
  picture?: string | undefined;
  country?: any | undefined;
  about_me?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
};

export type EventArguments = {
  event?: any;
  data?: any;
  element?: HTMLElement;
  position?: number[];
};

export type SidenavArguments = {
  flag?: boolean;
  event?: string;
  data?: any;
};
