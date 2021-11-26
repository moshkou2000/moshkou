import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatatableComponent } from './datatable.component';
import { DatatableRoutingModule } from './datatable-routing.module';
import { CdkDetailRowDirective } from './cdk-detail-row.directive';
import { CdkBottomSheetComponent } from './datatable-toolbar/cdk-bottom-sheet.component';
import { DatatableToolbarComponent } from './datatable-toolbar/datatable-toolbar.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    ReactiveFormsModule,
    DatatableRoutingModule,
    SharedModule,
  ],
  declarations: [
    CdkBottomSheetComponent,
    CdkDetailRowDirective,
    DatatableComponent,
    DatatableToolbarComponent,
  ],
})
export class DatatableModule {}
