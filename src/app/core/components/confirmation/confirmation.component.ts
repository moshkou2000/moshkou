import { Component, OnInit } from '@angular/core';
import { TimerArguments } from '../../arguments/arguments';
import { ResponseModel } from '../../models/response.model';
import { IServices } from '../../services/services.service';

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
  timerArgs: TimerArguments = { minute: 2 };
  canResend: boolean = false;

  constructor(private service: IServices) {
    this.email = this.service.getCurrentNavigationExtras()?.email;
  }

  ngOnInit(): void {}

  confirm(): void {
    this.disabled = true;
    this.service
      .confirm({
        email: this.email,
        token: this.token,
        confirmationCode: this.confirmationCode,
      })
      .subscribe((data: ResponseModel) => {
        this.disabled = false;
        if (data.ok && data.body.success) {
          localStorage.setItem(
            'hn1363_user',
            '{"_id":"user_id","token":"user_token","email":"user_email@email.com","name":"user_name","phone":"user_phone","gender":"male","dob":"04.06.1984","password":"user_password","about_me":"user_about_me","createdAt":"2021-10-27T08:25:11.803Z","updatedAt":"2021-10-27T08:25:11.803Z"}'
          );
          this.service.navigate(['']);
        } else {
          // TODO: remove this line when the backend is ready
          localStorage.setItem(
            'hn1363_user',
            '{"_id":"user_id","token":"user_token","email":"user_email@email.com","name":"user_name","phone":"user_phone","gender":"male","dob":"04.06.1984","password":"user_password","about_me":"user_about_me","createdAt":"2021-10-27T08:25:11.803Z","updatedAt":"2021-10-27T08:25:11.803Z"}'
          );
          this.service.navigate(['']);

          this.error = data.body.message;
        }
      });
  }

  resend(): void {
    this.canResend = false;
  }

  timerStopped(): void {
    this.canResend = true;
  }
}
