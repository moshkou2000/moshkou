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
}
