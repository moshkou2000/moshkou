type AnnouncementArguments = {
  id: String;
  message: String;
  url: String;
};

export class AnnouncementModel {
  public id: String;
  public message: String;
  public url: String;

  constructor(args: AnnouncementArguments) {
    this.id = args.id;
    this.message = args.message;
    this.url = args.url;
  }
}
