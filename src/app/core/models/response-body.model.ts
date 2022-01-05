import { CONSTANT_STRINIG } from '../constants/constant_string';

export class ResponseBodyModel {
  public success: boolean = false;
  public code: number | undefined;
  public message: string | undefined;
  public result: any | undefined;
  public pagination: [string] | undefined;

  constructor(response: any) {
    console.log(response);

    if (!response.ok) {
      if (response.status === 0) {
        this.message = CONSTANT_STRINIG.serviceIsUnavailable;
      } else {
        this.message = response.error.message
          ? response.error.message
          : response.message
          ? response.message
          : CONSTANT_STRINIG.serviceIsUnavailable;
      }
    } else {
      this.success = response.body.success;
      this.code = response.body.code;
      this.result = response.body.result;
      this.message = response.body.message;
      this.pagination = response.body.pagination;
    }
  }
}
