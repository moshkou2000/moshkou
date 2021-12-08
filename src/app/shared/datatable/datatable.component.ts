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
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

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

  @Output() onButtonClick = new EventEmitter();
  @Output() onSearchKeyup = new EventEmitter();
  @Output() onSortClick = new EventEmitter();
  @Output() onDeleteItem = new EventEmitter();
  @Output() onEditItem = new EventEmitter();

  //
  // TODO: set arrPopularity for dataSource
  //
  arrPopularity: number[] = [0, 0, 0, 0, 0];

  get expandedItems(): boolean {
    return this.dataSource?.data?.every((d) => d.expanded) === true;
  }
  set expandedItems(value: boolean) {
    this.dataSource?.data?.forEach((d) => (d.expanded = value));
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.setPopularity(3.3);
  }

  ngAfterViewInit(): void {
    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {}

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
  */
  // delete
  deleteItem(item?: /*DataModel*/ any): void {
    this.onDeleteItem.emit(item);
  }

  // edit
  editItem(item?: /*DataModel*/ any): void {
    this.onEditItem.emit(item);
  }
}
