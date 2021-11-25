import { IToolbarButton } from './datatable-toolbar.interface';

// icon or imageIcon
export const TOOLBAR_BUTTONS: IToolbarButton[] = [
  {
    name: 'ADD',
    icon: 'add',
  },
  {
    name: 'EDIT',
    icon: 'edit',
  },
  {
    name: 'DELETE',
    icon: 'delete',
  },
  {
    name: 'FILTER',
    icon: 'filter_alt',
  },
  {
    name: 'REPORTS',
    icon: 'insert_chart',
  },
  {
    name: 'EXCEL',
    imageIcon: '../../../../assets/icons/microsoft-excel.svg',
  },
  {
    name: 'PDF',
    imageIcon: '../../../../assets/icons/pdf.svg',
  },
  {
    name: 'DOWNLOAD',
    icon: 'file_download',
  },
  {
    name: 'UPDATE',
    icon: 'update',
    badge: 'RM 324.32',
    badgeColor: 'warn',
  },
];
