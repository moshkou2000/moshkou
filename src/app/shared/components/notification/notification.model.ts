import { STATUS_LEVEL } from 'src/app/core/constants/status-level';

type NotificationArguments = {
  id: string;
  message: string;
  level?: string;
  options?: [Options];
};

type OptionsArguments = { text: string; data?: any; notificationId?: string };

export class NotificationModel {
  public id: string;
  public message: string;
  public level?: string = STATUS_LEVEL.default;
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
  public text: string = '';
  public data?: any;
  public notificationId?: string = '';
}
