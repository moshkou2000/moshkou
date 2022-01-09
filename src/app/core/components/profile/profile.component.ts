import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Util } from '../../utils/util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: UserModel | undefined;

  constructor() {
    this.user = Util.getUser();
  }

  ngOnInit(): void {}
}
