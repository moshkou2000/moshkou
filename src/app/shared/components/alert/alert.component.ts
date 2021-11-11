import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertModel, AlertLevel, Options } from './alert.model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, AfterViewInit, OnDestroy {
  alert: AlertModel | undefined;
  subscription: Subscription | undefined;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private alertService: AlertService
  ) {
    this.subscription = this.alertService
      .get()
      .subscribe((alert: AlertModel) => {
        this.alert = alert;
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

  alertClick(alert_id: string, option: Options) {
    this.alertService.setButtonClick(alert_id, option);
  }
}
