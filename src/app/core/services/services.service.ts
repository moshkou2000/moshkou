import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetArguments } from '../arguments/arguments';
import { SampleService } from './sample/sample.service';

@Injectable({
  providedIn: 'root',
})
export class Services {
  constructor(private sampleService: SampleService) {}

  // SampleService
  //
  postSample(body: any): Observable<any> {
    return this.sampleService.post(body);
  }

  getSample(): Observable<any> {
    return this.sampleService.get({
      filter: 'nothing',
    });
  }

  putSample(id: string, body: any): Observable<any> {
    return this.sampleService.put(id, body);
  }

  deleteSample(id: string): Observable<any> {
    return this.sampleService.delete(id);
  }
}

export abstract class IServices {
  abstract postSample(body: any): Observable<any>;
  abstract getSample(arg: GetArguments): Observable<any>;
  abstract putSample(id: string, body: any): Observable<any>;
  abstract deleteSample(id: string): Observable<any>;
}

/*
  in tocken :
  1. roles
  2. modules[{
    id: '',
    name: '',
    view: boolean,
    edit: boolean,
  }]
  */
