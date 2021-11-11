import { Injectable } from '@angular/core';
import { ISidenav } from '../interfaces/isidenav';
import { UserModel } from '../models/users.model';
import { GeneralService } from './general/general.service';

@Injectable({
  providedIn: 'root',
})
export abstract class Services {
  constructor() {}

  sidenavItems: ISidenav[] | undefined;

  abstract getUser(): UserModel;
  abstract initMaterializeDropdown(): void;
  abstract initMaterializeSidenav(): void;
  abstract initMaterializeTabs(): void;

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
}

class ServicesImplement implements Services {
  constructor(private generalService: GeneralService) {}

  sidenavItems: ISidenav[] = this.generalService.sidenavItems;

  getUser(): UserModel {
    return this.generalService.getUser();
  }
  initMaterializeDropdown(): void {
    this.generalService.initMaterializeDropdown();
  }
  initMaterializeSidenav(): void {
    this.generalService.initMaterializeSidenav();
  }
  initMaterializeTabs(): void {
    this.generalService.initMaterializeTabs();
  }
}
