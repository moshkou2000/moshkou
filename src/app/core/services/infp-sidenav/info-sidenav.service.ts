import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SidenavArguments } from '../../arguments/arguments';

@Injectable({
  providedIn: 'root',
})
export class InfoSidenavService {
  private subject = new Subject<SidenavArguments>();

  constructor() {}

  set(args?: SidenavArguments): void {
    this.subject.next(args);
  }

  get(): Observable<SidenavArguments> {
    return this.subject.asObservable();
  }
}
