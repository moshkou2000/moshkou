import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewRef,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { STATUS_LEVEL } from 'src/app/core/constants/status-level';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';
import { environment } from 'src/environments/environment';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { NotificationModel, Options } from '../notification/notification.model';
import { NotificationService } from '../notification/notification.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { ViewStatesModel } from '../view-states/view-states.model';
import { TOOLBAR_BUTTONS_NAME } from './datatable-toolbar/datatable-toolbar.model';
import { PeriodicModel, SAMPLE_DATA } from './datatable.interface';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class DatatableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatDrawer) sidenav: MatDrawer | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  expandedItem: number = -1;
  _expandedItems: boolean = false;
  displayedColumns: string[] = [
    'position',
    'online',
    'name',
    'weight',
    'symbol',
    'popularity',
    'action',
  ];
  dataSource: MatTableDataSource<PeriodicModel> =
    new MatTableDataSource<PeriodicModel>(SAMPLE_DATA);
  //
  // TODO: set arrPopularity for dataSource
  //
  arrPopularity: number[] = [0, 0, 0, 0, 0];
  toolbarUpdateBadge: number = 2048;

  confirmationRef: any = null;
  confirmationSubscription: Subscription | undefined;
  notificationOptionSubscription: Subscription | undefined;

  viewStates: ViewStatesModel = new ViewStatesModel({
    state: ViewStates.idle,
  });

  get expandedItems(): boolean {
    return this._expandedItems;
  }

  set expandedItems(value: boolean) {
    this._expandedItems = value;
    this.dataSource?.data?.forEach((d) => (d.expanded = value));
  }

  constructor(
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.setPopularity(3.3);
  }

  ngAfterViewInit(): void {
    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    if (this.confirmationSubscription) {
      this.confirmationSubscription.unsubscribe();
    }
    if (this.notificationOptionSubscription) {
      this.notificationOptionSubscription.unsubscribe();
    }
  }

  setPopularity(popularity: number): void {
    let i = 0;
    for (; i < popularity; i++) {
      this.arrPopularity[i] = 1;
    }
    const intPopularity = Math.ceil(popularity);
    if (popularity !== intPopularity) {
      this.arrPopularity[i - 1] = 2;
    }
  }

  /*
    datatable
    header
    Toolbar events
  */
  // toolbar search keyup
  toolbarSearchKeyup(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // toolbar buttons click
  toolbarButtonClick(event: any): void {
    !environment.production && console.log('::toolbarButtonClick', event);
    switch (event) {
      case TOOLBAR_BUTTONS_NAME.ADD:
        this.sidenav?.open();
        break;
      case TOOLBAR_BUTTONS_NAME.EDIT:
        this.sidenav?.close();
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
  deleteItem(item?: PeriodicModel): void {
    if (item) {
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

                  confirmationRef.close();
                  // alert
                },
              },
            },
          });
        this.confirmationSubscription = confirmationRef
          .afterClosed()
          .subscribe(() => {
            this.confirmationRef = null;
            that = null;
          });
        this.confirmationRef = confirmationRef;
      }
    }
  }

  // edit
  editItem(item?: PeriodicModel): void {
    if (item) {
    } else {
    }
  }
}
