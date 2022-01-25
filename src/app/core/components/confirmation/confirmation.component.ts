import { Component, OnInit } from '@angular/core';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';
import { TimerArguments } from '../../arguments/arguments';
import { ResponseModel } from '../../models/response.model';
import { UserModel } from '../../models/user.model';
import { IServices } from '../../services/services.service';
import { Util } from '../../utils/util';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  confirmationCode: string | undefined;
  email: string | undefined;
  token: string | undefined;
  error: string | undefined;
  disabled: boolean = false;
  disabledForm: boolean = false;
  timerArgs: TimerArguments = { minute: 2 };
  canResend: boolean = false;

  constructor(private service: IServices) {
    this.email = this.service.getCurrentNavigationExtras()?.email;
  }

  ngOnInit(): void {}

  confirm(): void {
    this.disabled = true;
    this.disabledForm = true;
    this.service
      .confirm({
        email: this.email,
        token: this.token,
        confirmationCode: this.confirmationCode,
      })
      .subscribe((data: ResponseModel) => {
        this.disabled = false;
        this.disabledForm = false;
        if (data.ok && data.body.success) {
          Util.setUser(
            new UserModel({
              _id: 'user_id',
              token: 'user_token',
              email: this.email,
              name: 'user_name',
              phone: 'user_phone',
              gender: 'male',
              dob: '04.06.1984',
              about_me: 'user_about_me',
              createdAt: '2021-10-27T08:25:11.803Z',
              updatedAt: '2021-10-27T08:25:11.803Z',
            })
          );
          Util.setViewStates(ViewStates.none);
          setTimeout(() => {
            this.service.navigate(['']);
          }, 400);
        } else {
          // TODO: remove this line when the backend is ready
          Util.setUser(
            new UserModel({
              _id: 'user_id',
              token: 'user_token',
              email: this.email,
              name: 'user_name',
              phone: 'user_phone',
              gender: 'male',
              dob: '04.06.1984',
              about_me: 'user_about_me',
              createdAt: '2021-10-27T08:25:11.803Z',
              updatedAt: '2021-10-27T08:25:11.803Z',
            })
          );
          Util.setViewStates(ViewStates.none);
          setTimeout(() => {
            this.service.navigate(['']);
          }, 400);

          this.error = data.body.message;
        }
      });
  }

  resend(): void {
    this.service
      .prove({ email: this.email })
      .subscribe((data: ResponseModel) => {
        if (data.ok && data.body.success) {
          this.canResend = false;
        } else {
          // TODO: remove this line when the backend is ready
          this.canResend = false;

          this.error = data.body.message;
        }
      });
  }

  timerStopped(): void {
    this.canResend = true;
  }
}
