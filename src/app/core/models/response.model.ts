import { ResponseStatusModel } from './response-status.model';
import { ResponseBodyModel } from './response-body.model';
import { ResponseEventType } from './response-event-type.model';


export class ResponseModel {

  public body: ResponseBodyModel;
  public ok = false;
  public status = 0;
  public statusCode: ResponseStatusModel;
  public statusText = "";
  public type = 0;
  public url = "";
  public headers? = {};
  public file?: ResponseEventType;


  constructor(response: any) {
    this.body = new ResponseBodyModel(response);
    this.headers = response.headers;
    this.ok = response.ok;
    this.status = response.status;
    this.statusCode = new ResponseStatusModel(response);
    this.statusText = response.statusText;
    this.type = response.type;
    this.url = response.url;
    this.file = new ResponseEventType(response);
  }

}
