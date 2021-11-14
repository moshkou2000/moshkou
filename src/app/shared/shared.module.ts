import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedPipe } from './pipes/shared.pipe';
import { SharedDirective } from './directives/shared.directive';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    SharedPipe,
    SharedDirective,
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    SharedPipe,
    SharedDirective,
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ],
})
export class SharedModule {}
