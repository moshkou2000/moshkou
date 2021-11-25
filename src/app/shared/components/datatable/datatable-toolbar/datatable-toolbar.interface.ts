import { ThemePalette } from '@angular/material/core';

export interface IToolbarButton {
  name: string;
  icon?: string;
  imageIcon?: string;
  badge?: string;
  badgeColor?: ThemePalette;
}
