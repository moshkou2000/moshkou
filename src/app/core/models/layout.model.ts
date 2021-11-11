export class LayoutModel {
  hasAlert: boolean = false;
  hasHeader: boolean = false;
  hasFooter: boolean = false;
  hasBack: boolean = false;

  constructor(flag?: boolean | undefined) {
    if (flag !== undefined) {
      this.hasAlert = flag;
      this.hasHeader = flag;
      this.hasFooter = flag;
      this.hasBack = flag;
    }
  }
}
