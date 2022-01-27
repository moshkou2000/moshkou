export class ConfirmationModel {
  public title: string;
  public message: string;
  public icon?: string;
  public imageIcon?: string;
  public buttons?: ConfirmationButtonModel[];

  constructor(
    title: string,
    message: string,
    icon: string,
    imageIcon: string,
    buttons?: ConfirmationButtonModel[]
  ) {
    this.title = title;
    this.message = message;
    this.icon = icon;
    this.imageIcon = imageIcon;
    this.buttons = buttons;
  }
}

export class ConfirmationButtonModel {
  public title: string = '';
  public click: any;
  public bgClass?: string;

  constructor(title: string, click: any, bgClass?: string) {
    this.title = title;
    this.click = click;
    this.bgClass = bgClass;
  }
}
