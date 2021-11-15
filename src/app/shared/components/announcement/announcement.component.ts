import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { AnnouncementModel } from './announcement.model';
import { AnnouncementService } from './announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit, AfterViewInit, OnDestroy {
  announcement: AnnouncementModel | undefined;
  subscription: Subscription | undefined;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private announcementService: AnnouncementService
  ) {
    this.subscription = this.announcementService
      .get()
      .subscribe((announcement: AnnouncementModel) => {
        this.announcement = announcement;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
