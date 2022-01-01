import {
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy,
  ViewRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';
import { ViewStatesModel } from 'src/app/shared/view-states/view-states.model';
import { environment } from 'src/environments/environment';
import { Util } from 'src/app/core/utils/util';

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
    if (this.notificationOptionSubscription) {
      this.notificationOptionSubscription.unsubscribe();
    }
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  getData() {
    this.dataSubscription = this.service.getSample().subscribe((data) => {
      this.data = data.body.result;
      this.viewStates.state = ViewStates.idle;
    });
  }

  // toolbar buttons click
  onButtonClick(event: any) {
    !environment.production && console.log('::toolbarButtonClick', event);
    switch (event) {
      case TOOLBAR_BUTTONS_NAME.ADD:
        break;
      case TOOLBAR_BUTTONS_NAME.EDIT:
        break;
      case TOOLBAR_BUTTONS_NAME.DELETE:
        break;
      case TOOLBAR_BUTTONS_NAME.FILTER:
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

    // this.sidenav?.open();
    // this.sidenav?.close();
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
                    this.removeNotification();
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

  /*
    datatable
    body
    each row
    column action buttons
  */
  // delete
  onDeleteItem(event: /*DataModel*/ any): void {
    let that: any = this;
    const dialogRef = Util.openDialog({
      dialog: this.dialog,
      component: ConfirmationComponent,
      data: {
        title: 'Delete Records',
        message:
          'This is data message, This is data message, This is data message, This is data message',
        button1: {
          title: 'Cancel',
          click: function () {
            dialogRef.close();
          },
        },
        button2: {
          title: 'Delete',
          click: function () {
            // TODO: do your action
            that.snackbar.openFromComponent(SnackbarComponent, {
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

            dialogRef.close();
            // alert
          },
        },
      },
      onClosed: () => {
        console.log('onDeleteItem dialog onClosed', event);
        that = null;
      },
    });
  }

  // edit
  onEditItem(event: /*DataModel*/ any): void {
    const dialogRef = Util.openDialog({
      dialog: this.dialog,
      component: ConfirmationComponent,
      data: {
        title: 'Edit Records',
        message:
          'This is data message, This is data message, This is data message, This is data message',
        button1: {
          title: 'Cancel',
          click: function () {
            dialogRef.close();
          },
        },
        button2: {
          title: 'Save',
          click: function () {
            // TODO: do your action

            dialogRef.close();
            // alert
          },
        },
      },
      onClosed: () => {
        console.log('onEditItem dialog onClosed', event);
      },
    });
  }
}
