export class AlertModel {
  public id: string;
  public level: AlertLevel = AlertLevel.default;
  public message: string;
  public options: [Options];

  constructor(
    id: string,
    level: AlertLevel,
    message: string,
    options: [Options]
  ) {
    this.id = id;
    this.level = level;
    this.message = message;
    this.options = options;
  }
}

export class Options {
  public text: string = '';
  public alertId?: string = '';
  public data?: any;
}

export enum AlertLevel {
  default,
  error,
  info,
  success,
  warning,
}
