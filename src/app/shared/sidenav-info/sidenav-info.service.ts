import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavInfoService {
  private subject = new Subject<boolean>();

  constructor() {}

  set(flag?: boolean): void {
    this.subject.next(flag);
  }

  get(): Observable<boolean> {
    return this.subject.asObservable();
  }

  remove(): void {
    this.subject.next();
  }
}
