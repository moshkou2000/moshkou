import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Observable } from 'rxjs';
import { IToolbarButton } from 'src/app/shared/datatable/datatable-toolbar/datatable-toolbar.interface';
import { GetArguments } from '../arguments/arguments';
import { IBreadcrumb } from '../interfaces/ibreadcrumb';
import { ISidenav } from '../interfaces/isidenav';
import { UserModel } from '../models/user.model';
import { GeneralService } from './general/general.service';
import { SampleService } from './sample/sample.service';

@Injectable({
  providedIn: 'root',
})
export class Services {
  constructor(
    private generalService: GeneralService,
    private sampleService: SampleService
  ) {}

  // GeneralService
  //
  clear(): void {
    this.generalService.clear();
  }
  getBreadcrumbs(link: string): IBreadcrumb | undefined {
    return this.generalService.getBreadcrumbs(link);
  }
  toggleFullscreen(id: string): void {
    return this.generalService.toggleFullscreen(id);
  }
  openBottomSheet(
    bottomSheet: MatBottomSheet,
    buttons?: IToolbarButton[],
    buttonClick?: any
  ): void {
    return this.generalService.openBottomSheet(
      bottomSheet,
      buttons,
      buttonClick
    );
  }

  getSidenavItems(): ISidenav[] {
    return this.generalService.sidenavItems;
  }

  getUser(): UserModel {
    return this.generalService.getUser();
  }

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
  abstract clear(): void;
  abstract getBreadcrumbs(link: string): IBreadcrumb | undefined;
  abstract toggleFullscreen(id: string): void;
  abstract openBottomSheet(
    bottomSheet: MatBottomSheet,
    buttons?: IToolbarButton[],
    buttonClick?: any
  ): void;
  abstract getSidenavItems(): ISidenav[];
  abstract getUser(): UserModel;

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
