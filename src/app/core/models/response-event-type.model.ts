import { HttpClient, HttpEventType } from '@angular/common/http';


export class ResponseEventType {
  public started = false;
  public progressing = false;
  public completed = false;
  public unknown = false;
  public progress = 0;

  constructor(response: any) {

    if (response && response.type) {
      switch (response.type) {
        case HttpEventType.Sent: this.started = true; break;
        case HttpEventType.DownloadProgress:
        case HttpEventType.UploadProgress:
          this.progressing = true;
          if (response.loaded && response.total) {
            this.progress = Math.round(100 * response.loaded / response.total);
          }
          break;
        case HttpEventType.Response:
          this.completed = true;
          if (response.loaded && response.total) {
            this.progress = Math.round(100 * response.loaded / response.total);
          }
          break;
        default: this.unknown = true; break;
      }
    }

  }
}
