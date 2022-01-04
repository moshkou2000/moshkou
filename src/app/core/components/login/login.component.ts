import { Component, OnInit } from '@angular/core';
import { ResponseModel } from '../../models/response.model';
import { IServices } from '../../services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  error: string | undefined;

  constructor(private service: IServices) {}

  ngOnInit(): void {}

  login(): void {
    this.service
      .login({ email: this.email })
      .subscribe((data: ResponseModel) => {
        if (data.ok && data.body.success) {
          this.service.navigate(['/verification'], {
            state: { email: this.email },
          });
        } else {
          this.error = data.body.message;
        }
      });
  }
  loginWithTwitter(): void {}
  loginWithGoogle(): void {}
  register(): void {
    this.service.navigate(['/register']);
  }
}
