import { Component, OnInit } from '@angular/core';
import { Util } from '../../utils/util';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor() {}

  get isLogin() {
    return Util.getViewStates().isLogin || Util.getViewStates().isNone;
  }

  get isRegistration() {
    return Util.getViewStates().isRegistration;
  }

  ngOnInit(): void {}
}
