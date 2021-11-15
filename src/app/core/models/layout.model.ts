export class LayoutModel {
  hasHeader: boolean = false;
  hasFooter: boolean = false;
  hasBack: boolean = false;

  constructor(flag?: boolean | undefined) {
    if (flag !== undefined) {
      this.hasHeader = flag;
      this.hasFooter = flag;
      this.hasBack = flag;
    }
  }
}
