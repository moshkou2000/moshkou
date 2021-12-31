// icon or imageIcon
export class NavItemModel {
  label: string = '';
  link?: string;
  outlet?: any;
  selected?: boolean;
  icon?: string;
  imageIcon?: string;
  class?: string;
  children?: NavItemModel[];

  public constructor(init: NavItemModel) {
    Object.assign(this, init);
  }

  get isSelected(): boolean | undefined {
    if (this.children && this.children?.length > 0) {
      return this.children.find((i: any) => i?.selected) !== undefined;
    } else {
      return this.selected;
    }
  }
}
