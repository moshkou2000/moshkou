import {
  Component,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewRef,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AnnouncementModel } from 'src/app/shared/components/announcement/announcement.model';
import { AnnouncementService } from 'src/app/shared/components/announcement/announcement.service';
import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

import { environment } from '../../../../environments/environment';

import {
  NotificationModel,
  Options,
} from '../../../shared/components/notification/notification.model';
import { NotificationService } from '../../../shared/components/notification/notification.service';
import { STATUS_LEVEL } from '../../constants/status-level';

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
    level: STATUS_LEVEL.warning,
    options: [new Options({ text: 'NNNN', data: 123456789 })],
  });

  confirmationRef: any = null;
  confirmationSubscription: Subscription | undefined;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private announcementService: AnnouncementService,
    private notificationService: NotificationService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngAfterViewInit(): void {
    // this.generateDialog();
  }

  ngOnDestroy(): void {
    if (this.confirmationSubscription) {
      this.confirmationSubscription.unsubscribe();
    }
  }

  generateNotification(): void {
    this.notificationService.set(this.notification);
    this.notificationOptionSubscription = this.notificationService
      .getButtonClick()
      .subscribe((option) => {
        !environment.production &&
          console.log('user clicked notification button ', option);

        if (option) {
          // TODO: it has clicked
          if (option.data === 2) {
            // it is an example
            this.removeNotification();
          } else {
            !environment.production &&
              this.snackbar.openFromComponent(SnackbarComponent, {
                data: {
                  message: 'This snakbar message.',
                  action: 'Undo',
                  actionClick: () => {
                    console.log('SettingsComponent.Snackbar.clicked');
                  },
                },
                duration: 399000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });
          }
        }

        if (!(this.changeDetectorRef as ViewRef).destroyed) {
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  removeNotification(): void {
    this.notificationService.remove();

    if (this.notificationOptionSubscription) {
      this.notificationOptionSubscription.unsubscribe();
    }
  }

  generateAnnouncement(): void {
    this.announcementService.set(this.announcement);
  }

  removeAnnouncement(): void {
    this.announcementService.remove();

    if (this.announcementOptionSubscription) {
      this.announcementOptionSubscription.unsubscribe();
    }
  }

  generateDialog(): void {
    if (!this.confirmationRef) {
      let that: any = this;
      const confirmationRef: MatDialogRef<ConfirmationComponent, any> =
        this.dialog.open(ConfirmationComponent, {
          disableClose: true,
          width: '250px',
          data: {
            title: 'Delete Records',
            message:
              'This is data message, This is data message, This is data message, This is data message',
            button1: {
              title: 'Cancel',
              click: function () {
                confirmationRef.close();
              },
            },
            button2: {
              title: 'Delete',
              click: function () {
                // TODO: do your action
                confirmationRef.close();
                // alert
              },
            },
          },
        });
      this.confirmationSubscription = confirmationRef
        .afterClosed()
        .subscribe(() => {
          !environment.production && console.log('The dialog was closed');
          this.confirmationRef = null;
          that = null;
        });
      this.confirmationRef = confirmationRef;
    }
  }
}
