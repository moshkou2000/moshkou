import { Component, OnInit } from '@angular/core';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';
import { ResponseModel } from '../../models/response.model';
import { UserModel } from '../../models/user.model';
import { IServices } from '../../services/services.service';
import { Util } from '../../utils/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  error: string | undefined;
  disabled: boolean = false;
  disabledForm: boolean = false;

  constructor(private service: IServices) {}

  ngOnInit(): void {}

  login(): void {
    this.disabled = true;
    this.disabledForm = true;
    this.service
      .login({ email: this.email })
      .subscribe((data: ResponseModel) => {
        this.disabled = false;
        this.disabledForm = false;
        if (data.ok && data.body.success) {
          Util.updateUser({ email: this.email, tempToken: data.body.result });
          Util.setViewStates(ViewStates.verification);
          setTimeout(() => {
            this.service.navigate(['/verification']);
          }, 400);
        } else {
          // TODO: remove this line when the backend is ready
          Util.updateUser({
            email: this.email,
            tempToken: 'hjk76sdknjds876dfnb7',
          });
          Util.setViewStates(ViewStates.verification);
          setTimeout(() => {
            this.service.navigate(['/verification']);
          }, 400);

          this.error = data.body.message;
        }
      });
  }
  loginWithTwitter(): void {}
  loginWithGoogle(): void {}
  register(): void {
    this.service.navigate(['/registration']);
  }
}
