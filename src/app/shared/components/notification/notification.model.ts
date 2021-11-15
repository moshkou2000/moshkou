type NotificationArguments = {
  id: string;
  message: string;
  level?: String;
  options?: [Options];
};

type OptionsArguments = { text: string; data?: any; notificationId?: string };

export class NotificationModel {
  public id: string;
  public message: string;
  public level?: String = NotificationLevel.default;
  public options?: [Options];

  constructor(args: NotificationArguments) {
    this.id = args.id;
    this.message = args.message;
    this.level = args.level;
    this.options = args.options;
  }
}

export class Options {
  constructor(args: OptionsArguments) {
    this.text = args.text;
    this.data = args.data;
    this.notificationId = args.notificationId;
  }
  public text: String = '';
  public data?: any;
  public notificationId?: String = '';
}

export interface INotificationLevel {
  default: String;
  error: String;
  info: String;
  success: String;
  warning: String;
}

export const NotificationLevel: INotificationLevel = {
  default: 'default',
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning',
};
