import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NotificationModel, Options } from './notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private subject = new Subject<NotificationModel>();
  private buttonClick = new Subject<Options>();

  constructor() {}

  set(notification: NotificationModel) {
    this.subject.next(notification);
  }

  get(): Observable<NotificationModel> {
    return this.subject.asObservable();
  }

  remove() {
    this.subject.next();
    this.buttonClick.next();
  }

  setButtonClick(notificationId: string, option: Options) {
    option.notificationId = notificationId;
    this.buttonClick.next(option);
  }

  getButtonClick(): Observable<Options> {
    return this.buttonClick.asObservable();
  }
}
