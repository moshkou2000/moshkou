import {
  IToolbarButton,
  IToolbarButtonsName,
} from './datatable-toolbar.interface';

export const TOOLBAR_BUTTONS_NAME: IToolbarButtonsName = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
  FILTER: 'FILTER',
  REPORTS: 'REPORTS',
  EXCEL: 'EXCEL',
  PDF: 'PDF',
  DOWNLOAD: 'DOWNLOAD',
  UPDATE: 'UPDATE',
};

// icon or imageIcon
export const TOOLBAR_BUTTONS: IToolbarButton[] = [
  {
    name: TOOLBAR_BUTTONS_NAME.ADD,
    icon: 'add',
  },
  {
    name: TOOLBAR_BUTTONS_NAME.EDIT,
    icon: 'edit',
  },
  {
    name: TOOLBAR_BUTTONS_NAME.DELETE,
    icon: 'delete',
  },
  {
    name: TOOLBAR_BUTTONS_NAME.FILTER,
    icon: 'filter_alt',
  },
  {
    name: TOOLBAR_BUTTONS_NAME.REPORTS,
    icon: 'insert_chart',
  },
  {
    name: TOOLBAR_BUTTONS_NAME.EXCEL,
    imageIcon: '../../../../assets/icons/microsoft-excel.svg',
  },
  {
    name: TOOLBAR_BUTTONS_NAME.PDF,
    imageIcon: '../../../../assets/icons/pdf.svg',
  },
  {
    name: TOOLBAR_BUTTONS_NAME.DOWNLOAD,
    icon: 'file_download',
  },
  {
    name: TOOLBAR_BUTTONS_NAME.UPDATE,
    icon: 'update',
    badge: 'RM 324.32',
    badgeColor: 'warn',
  },
];
