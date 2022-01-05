import { ResponseBodyModel } from './response-body.model';

export class ResponseModel {
  public headers: any;
  public ok: boolean;
  public status: number;
  public statusText: string;
  public url: string;
  public body: ResponseBodyModel;

  constructor(response: any) {
    this.headers = response.headers;
    this.ok = response.ok;
    this.status = response.status;
    this.statusText = response.statusText;
    this.url = response.url;
    this.body = new ResponseBodyModel(response);
  }
}
