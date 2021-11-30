import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AnnouncementComponent } from './announcement/announcement.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavInfoComponent } from './sidenav-info/sidenav-info.component';
import { ViewStatesComponent } from './view-states/view-states.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AnnouncementComponent,
    NotificationComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SidenavInfoComponent,
    ViewStatesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    LayoutModule,
    FlexLayoutModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    AnnouncementComponent,
    FooterComponent,
    HeaderComponent,
    NotificationComponent,
    MatSidenavModule,
    SidenavComponent,
    SidenavInfoComponent,
    ViewStatesComponent,
  ],
})
export class SharedModule {}
