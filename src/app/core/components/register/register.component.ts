import { Component, OnInit } from '@angular/core';
import { IServices } from '../../services/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: string | undefined;

  constructor(private service: IServices) {}

  ngOnInit(): void {}

  register(): void {
    // TODO: registering process
    // 1. send a verification code via email / sms
    // 2. verify
    // or
    // 1. send a link via email
    // 2. click on link for verification
  }
  registerWithTwitter(): void {}
  registerWithGoogle(): void {}
  login(): void {
    this.service.navigate(['/login']);
  }
}
