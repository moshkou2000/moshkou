import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { TimerArguments } from 'src/app/core/arguments/arguments';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() args: TimerArguments | undefined;
  @Output() timerStopped = new EventEmitter();

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  subscription: Subscription | undefined;

  constructor() {}

  ngOnInit() {
    if (this.args?.hour !== undefined) this.hours = this.args!.hour;
    if (this.args?.minute !== undefined) this.minutes = this.args!.minute;
    if (this.args?.second !== undefined) this.seconds = this.args!.second;

    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private getTimeDifference() {
    --this.seconds;

    if (this.seconds < 0) {
      if (this.minutes > 0) {
        this.seconds = 59;
        --this.minutes;
        if (this.minutes < 0) {
          if (this.hours > 0) {
            this.minutes = 59;
            --this.hours;
          }
        }
      }
    }

    if (this.seconds < 0) {
      this.seconds = 0;
      this.subscription?.unsubscribe();
      this.timerStopped.emit();
    }
  }
}
