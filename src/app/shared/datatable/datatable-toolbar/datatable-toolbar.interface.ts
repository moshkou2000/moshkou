import { ThemePalette } from '@angular/material/core';

export interface IToolbarButtonsName {
  ADD: string;
  EDIT: string;
  DELETE: string;
  FILTER: string;
  REPORTS: string;
  EXCEL: string;
  PDF: string;
  DOWNLOAD: string;
  UPDATE: string;
}

export interface IToolbarButton {
  name: string;
  icon?: string;
  imageIcon?: string;
  badge?: string;
  badgeColor?: ThemePalette;
}
