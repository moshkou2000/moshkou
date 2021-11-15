import {
  Component,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AnnouncementModel } from 'src/app/shared/components/announcement/announcement.model';
import { AnnouncementService } from 'src/app/shared/components/announcement/announcement.service';

import { environment } from '../../../../environments/environment';

import {
  NotificationModel,
  NotificationLevel,
  Options,
} from '../../../shared/components/notification/notification.model';
import { NotificationService } from '../../../shared/components/notification/notification.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements AfterViewInit, OnDestroy {
  announcementOptionSubscription: Subscription | undefined;
  announcement: AnnouncementModel = new AnnouncementModel({
    id: '67868768768768768hhh7',
    message: 'This is announcement.',
    url: 'https://www.google.com/',
  });

  notificationOptionSubscription: Subscription | undefined;
  notification: NotificationModel = new NotificationModel({
    id: '678687687687687687',
    message: 'This is notification...',
    level: NotificationLevel.success,
    options: [new Options({ text: 'NNNN', data: 123456789 })],
  });

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private announcementService: AnnouncementService,
    private notificationService: NotificationService
  ) {}

  ngAfterViewInit() {}

  ngOnDestroy() {}

  generateNotification() {
    this.notificationService.set(this.notification);
    this.notificationOptionSubscription = this.notificationService
      .getButtonClick()
      .subscribe((option) => {
        !environment.production &&
          console.log('user clicked notification button ', option);

        if (option) {
          // it has clicked
          if (option.data === 2) {
            // it is an example
            this.removeNotification();
          }
        }

        if (!(this.changeDetectorRef as ViewRef).destroyed) {
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  removeNotification() {
    this.notificationService.remove();

    if (this.notificationOptionSubscription) {
      this.notificationOptionSubscription.unsubscribe();
    }
  }

  generateAnnouncement() {
    this.announcementService.set(this.announcement);
  }

  removeAnnouncement() {
    this.announcementService.remove();

    if (this.announcementOptionSubscription) {
      this.announcementOptionSubscription.unsubscribe();
    }
  }
}
