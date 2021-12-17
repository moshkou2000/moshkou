import { ResponseModel } from '../models/response.model';

export class Temp {
  static modifyGithubResponse(data: any): ResponseModel {
    const d = new ResponseModel(data);
    d.body.result = data.body.items;
    d.body.success = true;
    d.body.result.forEach((d: any) => {
      d.expanded = false;
    });
    return d;
  }
}
