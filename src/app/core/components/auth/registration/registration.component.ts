import { Component, OnInit } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { UserModel } from 'src/app/core/models/user.model';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';
import { ResponseModel } from '../../../models/response.model';
import { IServices } from '../../../services/services.service';
import { Util } from '../../../utils/util';

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

  constructor(
    private service: IServices,
    private authService: SocialAuthService
  ) {}

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
          setTimeout(() => {
            this.service.navigate(['/confirmation'], {
              email: this.email,
              token: data.body.result,
            });
          }, 400);
          Util.setViewStates(ViewStates.confirmation);
        } else {
          // TODO: remove this line when the backend is ready
          Util.updateUser({
            email: this.email,
            tempToken: 'hjk76sdknjds876dfnb7',
          });
          Util.setViewStates(ViewStates.confirmation);
          setTimeout(() => {
            this.service.navigate(['/confirmation'], {
              email: this.email,
              token: 'hjk76sdknjds876dfnb7',
            });
          }, 400);
          Util.setViewStates(ViewStates.confirmation);

          this.error = data.body.message;
        }
      });
  }
  registerWithTwitter(): void {}
  registerWithGoogle(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID, {
        scope: 'profile email',
      })
      .then((value: SocialUser) => {
        Util.setUser(
          new UserModel({
            _id: value.id,
            token: value.authToken,
            email: value.email,
            name: value.name,
            picture: value.photoUrl,
            phone: 'user_phone',
            gender: 'male',
            dob: '04.06.1984',
            about_me: 'user_about_me',
            createdAt: '2021-10-27T08:25:11.803Z',
            updatedAt: '2021-10-27T08:25:11.803Z',
          })
        );
        setTimeout(() => {
          Util.setViewStates(ViewStates.none);
          this.service.navigate(['/home']);
        }, 400);
      })
      .catch((reason: any) => {
        this.error = reason.error;
      });
  }
  login(): void {
    Util.setViewStates(ViewStates.login);
    this.service.navigate(['']);
  }
}
