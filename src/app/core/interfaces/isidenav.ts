// icon or imageIcon
export interface ISidenav {
  label: string;
  link: string;
  selected?: boolean;
  icon?: string;
  imageIcon?: string;
  class?: string;
  children?: ISidenav[];
}
