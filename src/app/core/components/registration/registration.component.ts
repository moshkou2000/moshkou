import { Component, OnInit } from '@angular/core';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';
import { ResponseModel } from '../../models/response.model';
import { IServices } from '../../services/services.service';
import { Util } from '../../utils/util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  fullName: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  error: string | undefined;
  disabled: boolean = false;
  disabledForm: boolean = false;

  constructor(private service: IServices) {}

  ngOnInit(): void {}

  // TODO: registering process
  // 1. send a verification code via email
  // 2. confirm
  register(): void {
    this.disabled = true;
    this.disabledForm = true;
    this.service
      .login({ fullName: this.fullName, phone: this.phone, email: this.email })
      .subscribe((data: ResponseModel) => {
        this.disabled = false;
        this.disabledForm = false;
        if (data.ok && data.body.success) {
          Util.updateUser({ email: this.email, tempToken: data.body.result });
          Util.setViewStates(ViewStates.confirmation);
          this.service.navigate(['/confirmation'], {
            email: this.email,
            token: data.body.result,
          });
          Util.setViewStates(ViewStates.confirmation);
        } else {
          // TODO: remove this line when the backend is ready
          Util.updateUser({
            email: this.email,
            tempToken: 'hjk76sdknjds876dfnb7',
          });
          Util.setViewStates(ViewStates.confirmation);
          this.service.navigate(['/confirmation'], {
            email: this.email,
            token: 'hjk76sdknjds876dfnb7',
          });
          Util.setViewStates(ViewStates.confirmation);

          this.error = data.body.message;
        }
      });
  }
  registerWithTwitter(): void {}
  registerWithGoogle(): void {}
  login(): void {
    this.service.navigate(['/login']);
  }
}
