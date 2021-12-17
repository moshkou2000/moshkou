import { AnnouncementArguments } from 'src/app/core/arguments/arguments';

export class AnnouncementModel {
  public id: string;
  public message: string;
  public url: string;

  constructor(args: AnnouncementArguments) {
    this.id = args.id;
    this.message = args.message;
    this.url = args.url;
  }
}
