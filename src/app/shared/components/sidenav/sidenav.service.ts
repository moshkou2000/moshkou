import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private subject = new Subject<boolean>();

  constructor() {}

  set(flag: boolean) {
    this.subject.next(flag);
  }

  get(): Observable<boolean> {
    return this.subject.asObservable();
  }

  remove() {
    this.subject.next();
  }
}
