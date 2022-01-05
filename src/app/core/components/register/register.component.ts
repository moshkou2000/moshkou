import { Component, OnInit } from '@angular/core';
import { ResponseModel } from '../../models/response.model';
import { IServices } from '../../services/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  fullName: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  error: string | undefined;
  disabled: boolean = false;

  constructor(private service: IServices) {}

  ngOnInit(): void {}

  // TODO: registering process
  // 1. send a verification code via email
  // 2. confirm
  register(): void {
    this.disabled = true;
    this.service
      .login({ fullName: this.fullName, phone: this.phone, email: this.email })
      .subscribe((data: ResponseModel) => {
        this.disabled = false;
        if (data.ok && data.body.success) {
          this.service.navigate(['/confirmation'], {
            email: this.email,
            token: data.body.result,
          });
        } else {
          // TODO: remove this line when the backend is ready
          this.service.navigate(['/confirmation'], {
            email: this.email,
            token: 'hjk76sdknjds876dfnb7',
          });

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
