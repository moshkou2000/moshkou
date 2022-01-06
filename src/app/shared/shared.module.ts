import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AnnouncementComponent } from './announcement/announcement.component';
import { NotificationComponent } from './notification/notification.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavInfoComponent } from './sidenav-info/sidenav-info.component';
import { ViewStatesComponent } from './view-states/view-states.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AnnouncementComponent,
    BottomSheetComponent,
    FooterComponent,
    HeaderComponent,
    MainnavComponent,
    NotificationComponent,
    SidenavComponent,
    SidenavInfoComponent,
    StarRatingComponent,
    TimerComponent,
    ViewStatesComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  exports: [
    AnnouncementComponent,
    BottomSheetComponent,
    FooterComponent,
    HeaderComponent,
    MainnavComponent,
    MatSidenavModule,
    NotificationComponent,
    SidenavComponent,
    SidenavInfoComponent,
    StarRatingComponent,
    TimerComponent,
    ViewStatesComponent,
  ],
})
export class SharedModule {}
