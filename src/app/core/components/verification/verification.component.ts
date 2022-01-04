import { Component, OnInit } from '@angular/core';
import { IServices } from '../../services/services.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {
  email: string | undefined;
  error: string | undefined;

  constructor(private service: IServices) {
    this.email = this.service.getCurrentNavigationExtras()?.state?.email;
  }

  ngOnInit(): void {}

  verify(form: any): void {
    console.log('verify: ', form);

    localStorage.setItem(
      'hn1363_user',
      '{"_id":"user_id","token":"user_token","email":"user_email@email.com","name":"user_name","phone":"user_phone","gender":"male","dob":"04.06.1984","password":"user_password","about_me":"user_about_me","createdAt":"2021-10-27T08:25:11.803Z","updatedAt":"2021-10-27T08:25:11.803Z"}'
    );
    this.service.navigate(['']);
  }
}
