import {
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy,
  ViewRef,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { CONSTANT_NUMBER } from 'src/app/core/constants/constant_number';
import {
  TOOLBAR_BUTTONS,
  TOOLBAR_BUTTONS_NAME,
} from 'src/app/core/constants/toolbar-buttons';
import { STATUS_LEVEL } from 'src/app/core/constants/status-level';
import { Services } from 'src/app/core/services/services.service';
import { ConfirmationComponent } from 'src/app/shared/confirmation/confirmation.component';
import { DatatableToolbarModel } from 'src/app/shared/datatable/datatable-toolbar/datatable-toolbar.model';
import {
  NotificationModel,
  Options,
} from 'src/app/shared/notification/notification.model';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';
import { ViewStatesModel } from 'src/app/shared/view-states/view-states.model';
import { environment } from 'src/environments/environment';
import { Util } from 'src/app/core/utils/util';
import { EventArguments } from 'src/app/core/arguments/arguments';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit, OnDestroy {
  viewStates: ViewStatesModel = new ViewStatesModel();
  displayedColumns: string[] = [
    'position',
    'online',
    'name',
    'weight',
    'symbol',
    'popularity',
    'action',
  ];
  toolbar: DatatableToolbarModel = new DatatableToolbarModel({
    hasFullscreen: true,
    hasSearch: true,
    toolbarButtons: TOOLBAR_BUTTONS,
  });
  data: any;
  paginationSizes: number[] = CONSTANT_NUMBER.paginationSizes;
  defaultPageSize: number = CONSTANT_NUMBER.defaultPageSize;

  notificationOptionSubscription: Subscription | undefined;
  dataSubscription: Subscription | undefined;

  constructor(
    public dialog: MatDialog,
    public snackbar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef,
    private service: Services,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.notificationOptionSubscription?.unsubscribe();
    this.dataSubscription?.unsubscribe();
  }

  getData() {
    this.dataSubscription = this.service.getSample().subscribe((data) => {
      this.data = data.body.result;
      this.viewStates.state = ViewStates.idle;
    });
  }

  // toolbar buttons click
  onButtonClick(event: any) {
    this.toolbar.toolbarButton = this.toolbar.getButton(event);
    switch (event) {
      case TOOLBAR_BUTTONS_NAME.ADD:
        this.service.setInfoSidenav({ flag: true });
        break;
      case TOOLBAR_BUTTONS_NAME.EDIT:
        break;
      case TOOLBAR_BUTTONS_NAME.DELETE:
        break;
      case TOOLBAR_BUTTONS_NAME.FILTER:
        this.service.setInfoSidenav({ flag: true });
        break;
      case TOOLBAR_BUTTONS_NAME.REPORTS:
        break;
      case TOOLBAR_BUTTONS_NAME.EXCEL:
        break;
      case TOOLBAR_BUTTONS_NAME.PDF:
        break;
      case TOOLBAR_BUTTONS_NAME.DOWNLOAD:
        this.doDownload();
        break;
      case TOOLBAR_BUTTONS_NAME.UPDATE:
        break;
    }
  }

  // search
  onSearchKeyup(event: any) {
    !environment.production && console.log('::onSearchKeyup', event);
    // TODO: call api
  }

  onSortClick(event: Sort) {
    console.log('onSortClick', event);
  }

  doDownload(): void {
    const notification: NotificationModel = new NotificationModel({
      id: '678687687687687687',
      message: 'It is downloading...',
      level: STATUS_LEVEL.warning,
      options: [new Options({ text: 'Stop', data: 123456789 })],
    });
    this.notificationService.set(notification);
    this.notificationOptionSubscription = this.notificationService
      .getButtonClick()
      .subscribe((option) => {
        !environment.production &&
          console.log('user clicked notification button ', option);

        if (option) {
          // TODO: set the condition
          if (option.data > 0) {
            Util.openSnackbar({
              snackbar: this.snackbar,
              duration: 399000,
              data: {
                message: 'This snakbar message.',
                action: 'Undo',
                actionClick: () => {
                  this.removeNotification();
                  console.log('SettingsComponent.Snackbar.clicked');
                },
              },
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
    this.notificationOptionSubscription?.unsubscribe();
  }

  /*
    datatable
    body
    each row
    column action buttons
  */
  // delete
  onDeleteItem(args: EventArguments): void {
    let that: any = this;
    const dialogRef = Util.openDialog(
      {
        dialog: this.dialog,
        component: ConfirmationComponent,
        data: {
          icon: 'delete',
          title: 'Delete Records',
          message:
            'This is data message, This is data message, This is data message, This is data message',
          buttons: [
            {
              title: 'Delete',
              bgClass: 'error-bg',
              click: function () {
                // TODO: do your action
                Util.openSnackbar({
                  snackbar: that.snackbar,
                  duration: 399000,
                  data: {
                    message: 'This snakbar message.',
                    action: 'Undo',
                    actionClick: () => {
                      console.log('SettingsComponent.Snackbar.clicked');
                    },
                  },
                });

                dialogRef.close();
              },
            },
            {
              title: 'Cancel',
              click: function () {
                dialogRef.close();
              },
            },
          ],
        },
        onClosed: () => {
          console.log('onDeleteItem dialog onClosed', event);
          that = null;
        },
      },
      this.service
    );
  }

  // edit
  onEditItem(args: EventArguments): void {
    const dialogRef: MatDialogRef<any, any> = Util.openDialog(
      {
        dialog: this.dialog,
        component: ConfirmationComponent,
        // position: args.position,
        data: {
          imageIcon: '../../../assets/icons/facebook.svg',
          title: 'Edit Records',
          message:
            'This is data message, This is data message, This is data message, This is data message',
          buttons: [
            {
              title: 'Save',
              bgClass: 'info-bg',
              click: function () {
                // TODO: do your actio
                dialogRef?.close();
              },
            },
            {
              title: 'Cancel',
              click: function () {
                dialogRef?.close();
              },
            },
          ],
        },
        onClosed: () => {
          console.log('onEditItem dialog onClosed', args);
        },
      },
      this.service
    );
  }
}
