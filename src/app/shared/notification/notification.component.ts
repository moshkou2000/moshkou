import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { NotificationModel, Options } from './notification.model';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnDestroy {
  notification: NotificationModel | undefined;
  subscription: Subscription | undefined;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private notificationService: NotificationService
  ) {
    this.subscription = this.notificationService
      .get()
      .subscribe((notification: NotificationModel) => {
        this.notification = notification;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  notificationClick(notification_id: string, option: Options): void {
    this.notificationService.setButtonClick(notification_id, option);
  }
}
