import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { SidenavService } from '../sidenav/sidenav.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { PeriodicElement, SAMPLE_DATA } from './datatable.interface';
import { DatatableDatasourseModel } from './datatable.model';

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
export class DatatableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  expandedItem: number = -1;
  displayedColumns: string[] = [
    'position',
    'online',
    'name',
    'weight',
    'symbol',
    'popularity',
    'action',
  ];
  dataSource: MatTableDataSource<PeriodicElement> =
    new MatTableDataSource<PeriodicElement>(SAMPLE_DATA);
  // dataSource: DatatableDatasourseModel = new DatatableDatasourseModel();
  arrPopularity: number[] = [0, 0, 0, 0, 0];

  confirmationRef: any = null;
  confirmationSubscription: Subscription | undefined;

  isFullscreen: boolean = false;
  isLoadingResults: boolean = false;
  isRateLimitReached: boolean = false;

  updateBadge: number = 1990;

  isExpansionDetailRow = (i: number, row: Object) =>
    row.hasOwnProperty('detailRow');

  constructor(
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    private generalService: GeneralService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<PeriodicElement>(SAMPLE_DATA);
    // this.dataSource.data = SAMPLE_DATA;

    this.setPopularity(3.3);
  }

  ngAfterViewInit(): void {
    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue: string = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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

  deleteItem(item: PeriodicElement): void {
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

  editItem(item: PeriodicElement): void {
    console.log('editItem', item);
  }

  // fullscreen target id <toggleFullscreen>
  // close sidenav <set>
  // toggle text & icon of fullscreen button <isFullscreen>
  toggleFullscreen(id: string) {
    this.isFullscreen = !this.isFullscreen;
    this.generalService.toggleFullscreen(id);
    this.sidenavService.set(false);
  }
}
