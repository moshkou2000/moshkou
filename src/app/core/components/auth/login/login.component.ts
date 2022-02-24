import { Component, OnInit } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../../../models/response.model';
import { UserModel } from '../../../models/user.model';
import { IServices } from '../../../services/services.service';
import { Util } from '../../../utils/util';

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

  constructor(
    private service: IServices,
    private authService: SocialAuthService
  ) {}

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
  loginWithGoogle(): void {
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
        Util.setViewStates(ViewStates.none);
        setTimeout(() => {
          this.service.navigate(['/home']);
        }, 400);
      })
      .catch((reason: any) => {
        this.error = reason.error;
      });
  }
  register(): void {
    Util.setViewStates(ViewStates.registration);
    this.service.navigate(['']);
  }
}
