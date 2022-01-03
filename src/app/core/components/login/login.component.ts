import { Component, OnInit } from '@angular/core';
import { IServices } from '../../services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private service: IServices) {}

  ngOnInit(): void {}

  login(): void {
    localStorage.setItem(
      'hn1363_user',
      '{"_id":"user_id","token":"user_token","email":"user_email@email.com","name":"user_name","phone":"user_phone","gender":"male","dob":"04.06.1984","password":"user_password","about_me":"user_about_me","createdAt":"2021-10-27T08:25:11.803Z","updatedAt":"2021-10-27T08:25:11.803Z"}'
    );
    this.service.navigate(['']);
  }

  loginWithTwitter(): void {}
  loginWithGoogle(): void {}
}
