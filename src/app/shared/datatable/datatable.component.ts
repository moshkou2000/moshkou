import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnDestroy,
  Input,
  Output,
  OnChanges,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import {
  EventArguments,
  SidenavArguments,
} from 'src/app/core/arguments/arguments';
import { Services } from 'src/app/core/services/services.service';
import { ViewStatesModel } from '../view-states/view-states.model';
import { DatatableToolbarModel } from './datatable-toolbar/datatable-toolbar.model';

//
// TODO : paginator & sort
//

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent
  implements OnInit, AfterViewInit, OnDestroy, OnChanges
{
  @ViewChild(MatDrawer) sidenav: MatDrawer | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  @Input() toolbar?: DatatableToolbarModel;
  @Input() set data(data: any) {
    this.dataSource = new MatTableDataSource<any>(data);
  }
  @Input() viewStates?: ViewStatesModel;
  @Input() displayedColumns?: string[] = [];
  @Input() paginationSizes: number[] = [];
  @Input() defaultPageSize: number = 0;

  @Output() onButtonClick = new EventEmitter<any>();
  @Output() onSearchKeyup = new EventEmitter<string>();
  @Output() onSortClick = new EventEmitter<any>();
  @Output() onDeleteItem = new EventEmitter<EventArguments>();
  @Output() onEditItem = new EventEmitter<EventArguments>();

  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  private isSidenavInfoOpen: boolean = false;
  private infoSidenavSubscription: Subscription | undefined;

  get expandedItems(): boolean {
    return this.dataSource?.data?.every((d) => d.expanded) === true;
  }
  set expandedItems(value: boolean) {
    this.dataSource?.data?.forEach((d) => (d.expanded = value));
  }

  constructor(public dialog: MatDialog, private service: Services) {
    // sidenav
    this.infoSidenavSubscription = this.service
      .getInfoSidenav()
      .subscribe((args?: SidenavArguments) => {
        this.isSidenavInfoOpen = args?.flag ?? !this.isSidenavInfoOpen;
        if (this.isSidenavInfoOpen) this.sidenav?.open();
        else this.sidenav?.close();
      });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.infoSidenavSubscription?.unsubscribe();
  }

  /*
    datatable
    header
    Toolbar events
  */
  // sort
  sortTable(sortParameters: Sort): void {
    this.onSortClick.emit(sortParameters);
  }

  // toolbar search keyup
  toolbarSearchKeyup(value: string): void {
    // TODO: filtering client data, remove it if call api
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    this.onSearchKeyup.emit(value);
  }

  // toolbar buttons click
  toolbarButtonClick(event: any): void {
    this.onButtonClick.emit(event);
  }

  /*
    datatable
    body
    each row
    column action buttons
    item: DataModel
    position: [x, y]
  */
  // delete
  deleteItem(item?: any, event?: any): void {
    this.onDeleteItem.emit({ data: item, position: [event.x, event.y] });
  }

  // edit
  editItem(item?: any, event?: any): void {
    this.onEditItem.emit({ data: item, position: [event.x, event.y] });
  }
}
