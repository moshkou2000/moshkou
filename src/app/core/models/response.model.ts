import { ResponseBodyModel } from './response-body.model';

export class ResponseModel {
  public body: ResponseBodyModel;
  public ok: boolean;
  public status: number;
  public statusText: string;
  public url: string;
  public headers?: any;

  constructor(response: any) {
    this.body = new ResponseBodyModel(response);
    this.headers = response.headers;
    this.ok = response.ok;
    this.status = response.status;
    this.statusText = response.statusText;
    this.url = response.url;
  }
}
