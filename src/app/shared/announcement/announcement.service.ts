import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AnnouncementModel } from './announcement.model';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private subject = new Subject<AnnouncementModel>();

  constructor() {}

  set(announcement: AnnouncementModel) {
    this.subject.next(announcement);
  }

  get(): Observable<AnnouncementModel> {
    return this.subject.asObservable();
  }

  remove() {
    this.subject.next();
  }
}
